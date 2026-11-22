import { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import mqtt from 'mqtt';
import { BROKER, TOPICO } from './config';
import estilos from './estilos';

export default function App() {
  // Primeiro enviar; depois mostrar status e receber.
  const [status, setStatus] = useState('Conectando…');
  const [mensagens, setMensagens] = useState([]);

  function enviar() {
    const client = mqtt.connect(BROKER);
    client.once('connect', () => {
      client.publish(TOPICO, 'Olá, Higor!', () => {
        client.end();
      });
    });
  }

  useEffect(() => {
    const client = mqtt.connect(BROKER);

    client.on('connect', () => {
      setStatus('Conectado');
      client.subscribe(TOPICO);
    });

    client.on('message', (topico, payload) => {
      const novaMsg = payload.toString();
      const hora = new Date().toLocaleTimeString();
      setMensagens((prev) => [{ id: Date.now().toString() + Math.random(), texto: novaMsg, hora }, ...prev]);
    });

    return () => client.end(true);
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>MQTT básico</Text>
      <Text style={{ marginBottom: 12 }}>Status: {status}</Text>
      <Button title="Enviar Olá" onPress={enviar} />

      <View style={{ width: '100%', marginTop: 24, paddingHorizontal: 16, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Histórico de Mensagens:</Text>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          {mensagens.length === 0 ? (
            <Text style={{ color: '#888', fontStyle: 'italic' }}>Nenhuma mensagem recebida ainda.</Text>
          ) : (
            mensagens.map((item) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  borderRadius: 6,
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.texto}</Text>
                <Text style={{ fontSize: 11, color: '#666', marginTop: 4 }}>Recebida às: {item.hora}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}
