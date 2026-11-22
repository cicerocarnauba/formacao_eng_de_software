import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Linking } from 'react-native';

// Ao clicar num botão:
Linking.openSettings();

export default function App() {
  // 1. Hook do Expo para gerenciar a permissão da câmera
  const [permission, requestPermission] = useCameraPermissions();
  
  // 2. Estado que controla se a lanterna está acesa (true) ou apagada (false)
  const [lanternaLigada, setLanternaLigada] = useState(false);

  // Enquanto o app ainda está verificando as permissões do sistema
  if (!permission) {
    return <View style={styles.container} />;
  }

  // Se o usuário ainda não concedeu permissão para usar a câmera
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.textoAviso}>
          Precisamos de permissão da câmera para acionar o LED da lanterna.
        </Text>
        <TouchableOpacity style={styles.botaoPermissao} onPress={requestPermission}>
          <Text style={styles.textoBotao}>Permitir Acesso</Text>
        </TouchableOpacity>
        <StatusBar style="light" />
      </View>
    );
  }

  // Função chamada ao tocar no botão para inverter o estado da lanterna
  function alternarLanterna() {
    setLanternaLigada((estadoAtual) => !estadoAtual);
  }

  return (
    <View style={[styles.container, lanternaLigada && styles.containerAceso]}>
      {/* 
        3. Componente CameraView invisível (0x0 pixels).
        No Android e iOS, o LED da lanterna faz parte do hardware da câmera.
        A propriedade `enableTorch` liga ou desliga o LED traseiro em modo lanterna.
      */}
      <CameraView style={styles.cameraOculta} facing="back" enableTorch={lanternaLigada} />

      <Text style={[styles.titulo, lanternaLigada && styles.tituloAceso]}>
        {lanternaLigada ? 'LANTERNA ACESA' : 'LANTERNA APAGADA'}
      </Text>

      <TouchableOpacity
        style={[styles.botao, lanternaLigada ? styles.botaoLigado : styles.botaoDesligado]}
        onPress={alternarLanterna}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          {lanternaLigada ? 'APAGAR' : 'ACENDER'}
        </Text>
      </TouchableOpacity>

      <StatusBar style={lanternaLigada ? 'dark' : 'light'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  containerAceso: {
    backgroundColor: '#FEF9C3',
  },
  cameraOculta: {
    width: 0,
    height: 0,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A1A1AA',
    marginBottom: 40,
    letterSpacing: 1.5,
  },
  tituloAceso: {
    color: '#713F12',
  },
  botao: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  botaoDesligado: {
    backgroundColor: '#27272A',
    borderWidth: 4,
    borderColor: '#3F3F46',
  },
  botaoLigado: {
    backgroundColor: '#EAB308',
    borderWidth: 4,
    borderColor: '#FEF08A',
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  textoAviso: {
    color: '#E4E4E7',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  botaoPermissao: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
});
