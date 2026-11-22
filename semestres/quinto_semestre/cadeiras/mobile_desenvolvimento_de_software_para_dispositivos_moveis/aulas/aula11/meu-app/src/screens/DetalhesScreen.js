import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  // Lendo os parâmetros enviados pela tela Cardápio via route.params
  const { nome, preco, descricao } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Informações do Pedido</Text>
        </View>

        {/* Exibição do nome e do preço recebidos via parâmetros */}
        <Text style={styles.label}>Lanche:</Text>
        <Text style={styles.snackName}>{nome || 'Lanche não informado'}</Text>

        <Text style={styles.label}>Preço:</Text>
        <Text style={styles.snackPrice}>{preco || 'R$ 0,00'}</Text>

        {descricao ? (
          <>
            <Text style={styles.label}>Ingredientes & Descrição:</Text>
            <Text style={styles.snackDescription}>{descricao}</Text>
          </>
        ) : null}

        <View style={styles.divider} />

        {/* Botão de voltar que utiliza navigation.goBack() */}
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar ao Cardápio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE0B2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    color: '#E65100',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#868E96',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 12,
    marginBottom: 4,
  },
  snackName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
  },
  snackPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2E7D32',
  },
  snackDescription: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#E9ECEF',
    marginVertical: 24,
  },
  backButton: {
    backgroundColor: '#343A40',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
