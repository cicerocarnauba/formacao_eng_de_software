import { useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

const CHAVE_TEMA = '@aula19/tema';
const TEMA_PADRAO = 'light';

const CORES = {
  light: {
    fundo: '#FFFFFF',
    texto: '#111111',
  },
  dark: {
    fundo: '#121212',
    texto: '#FFFFFF',
  },
};

export default function App() {
  const [tema, setTema] = useState(TEMA_PADRAO);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarTema() {
      try {
        const valorSalvo = await AsyncStorage.getItem(CHAVE_TEMA);
        if (valorSalvo === 'light' || valorSalvo === 'dark') {
          setTema(valorSalvo);
        }
      } catch (erro) {
        console.error('Erro ao carregar tema:', erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarTema();
  }, []);

  async function alternarTema(ehEscuro) {
    const novoTema = ehEscuro ? 'dark' : 'light';
    setTema(novoTema);
    try {
      await AsyncStorage.setItem(CHAVE_TEMA, novoTema);
    } catch (erro) {
      console.error('Erro ao salvar tema:', erro);
    }
  }

  async function restaurarPadrao() {
    try {
      await AsyncStorage.removeItem(CHAVE_TEMA);
      setTema(TEMA_PADRAO);
    } catch (erro) {
      console.error('Erro ao remover tema:', erro);
    }
  }

  if (carregando) {
    return null;
  }

  const ehEscuro = tema === 'dark';
  const coresAtuais = CORES[tema];

  return (
    <View style={[styles.container, { backgroundColor: coresAtuais.fundo }]}>
      <StatusBar style={ehEscuro ? 'light' : 'dark'} />

      <Text style={[styles.titulo, { color: coresAtuais.texto }]}>
        Tema atual: {ehEscuro ? 'Escuro' : 'Claro'}
      </Text>

      <View style={styles.controle}>
        <Text style={[styles.label, { color: coresAtuais.texto }]}>
          Modo escuro
        </Text>
        <Switch value={ehEscuro} onValueChange={alternarTema} />
      </View>

      <Button title="Restaurar Padrão" onPress={restaurarPadrao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  controle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontSize: 16,
  },
});
