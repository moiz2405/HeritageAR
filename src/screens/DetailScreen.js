// src/screens/DetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';  // Import global styles

const DetailScreen = ({ route, navigation }) => {
  const { site } = route.params;  // Access the passed site data

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{site.name}</Text>
      <Text style={globalStyles.subtitle}>Location: {site.location}</Text>

      {/* Additional information can be displayed here */}
      <Text style={globalStyles.text}>Description of the heritage site goes here.</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;
