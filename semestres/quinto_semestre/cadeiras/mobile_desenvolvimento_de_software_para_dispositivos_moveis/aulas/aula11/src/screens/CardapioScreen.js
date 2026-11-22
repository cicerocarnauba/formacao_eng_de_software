import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { lanches } from '../data/cardapioData';

export default function CardapioScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cardápio de Lanches</Text>
      <Text style={styles.subtitle}>Escolha uma opção e toque para ver os detalhes:</Text>

      {lanches.map((lanche) => (
        <View key={lanche.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.snackName}>{lanche.nome}</Text>
            <Text style={styles.snackPricePreview}>{lanche.preco}</Text>
          </View>

          <Text style={styles.snackDescriptionPreview} numberOfLines={2}>
            {lanche.descricao}
          </Text>

          {/* Botão que navega para a tela Detalhes enviando nome e preco via route params */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Detalhes', {
                nome: lanche.nome,
                preco: lanche.preco,
                descricao: lanche.descricao,
              });
            }}
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  snackName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
  },
  snackPricePreview: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E65100',
    marginLeft: 8,
  },
  snackDescriptionPreview: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#E65100',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
