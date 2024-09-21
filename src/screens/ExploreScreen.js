// src/screens/ExploreScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles';  // Import the global styles

const ExploreScreen = ({ navigation }) => {
  const heritageSites = [
    { id: '1', name: 'Heritage Site A', location: 'Location A' },
    { id: '2', name: 'Heritage Site B', location: 'Location B' },
    { id: '3', name: 'Heritage Site C', location: 'Location C' },
    { id: '4', name: 'Heritage Site D', location: 'Location D' },
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Explore Heritage Sites</Text>
      <FlatList
        data={heritageSites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <Text style={globalStyles.subtitle}>{item.name}</Text>
            <Text>{item.location}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('Detail', { site: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ExploreScreen;
