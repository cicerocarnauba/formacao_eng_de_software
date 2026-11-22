import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  deleteTarefa,
  getAllTarefas,
  initDB,
  insertTarefa,
  toggleTarefaConcluida,
  updateTarefaTitulo,
} from './db';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  async function carregar() {
    const lista = await getAllTarefas();
    setTarefas(lista);
  }

  useEffect(() => {
    async function iniciar() {
      await initDB();
      await carregar();
    }
    iniciar();
  }, []);

  async function salvar() {
    if (!titulo.trim()) return;

    if (editandoId !== null) {
      await updateTarefaTitulo(editandoId, titulo);
      setEditandoId(null);
    } else {
      await insertTarefa(titulo);
    }

    setTitulo('');
    await carregar();
  }

  async function alternar(tarefa) {
    await toggleTarefaConcluida(tarefa.id, !tarefa.concluida);
    await carregar();
  }

  async function excluir(id) {
    await deleteTarefa(id);
    if (editandoId === id) {
      setEditandoId(null);
      setTitulo('');
    }
    await carregar();
  }

  function editar(tarefa) {
    setEditandoId(tarefa.id);
    setTitulo(tarefa.titulo);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={titulo}
          onChangeText={setTitulo}
        />
        <Button title={editandoId !== null ? 'Salvar' : 'Add'} onPress={salvar} />
        {editandoId !== null && (
          <Button
            title="Cancelar"
            onPress={() => {
              setEditandoId(null);
              setTitulo('');
            }}
          />
        )}
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.textoArea} onPress={() => alternar(item)}>
              <Text style={item.concluida ? styles.concluida : null}>
                {item.concluida ? '[x] ' : '[ ] '}
                {item.titulo}
              </Text>
            </TouchableOpacity>
            <Button title="Editar" onPress={() => editar(item)} />
            <Button title="Excluir" color="red" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textoArea: {
    flex: 1,
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
