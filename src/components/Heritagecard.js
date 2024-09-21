// src/components/HeritageCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeritageCard = ({ site }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{site.name}</Text>
      <Text>{site.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HeritageCard;
