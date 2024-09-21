// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';  // Import the global styles

const HomeScreen = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // Fade in effect
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={globalStyles.container}>
      <Animated.View style={{ ...styles.fadeView, opacity: fadeAnim }}>
        <Text style={globalStyles.title}>Welcome to HeritageAR!</Text>
        <Text style={styles.subtitle}>Discover the rich heritage around you</Text>
      </Animated.View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for heritage sites..."
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.welcomeCard}>
        <Image
          source={{ uri: 'https://your-image-url.com/example.jpg' }} // Replace with your image URL
          style={styles.welcomeImage}
        />
        <Text style={styles.cardText}>
          Explore historical sites, museums, and landmarks with our AR experience!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Explore')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Explore Heritage Sites</Text>
        </TouchableOpacity>
      </View>

      {/* Decorative Elements */}
      <View style={styles.decorativeElements}>
        <View style={styles.circle} />
        <View style={styles.square} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fadeView: {
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  welcomeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Customize button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  decorativeElements: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.1,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF5722',
    position: 'absolute',
    top: 50,
    right: -50,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 20,
    left: -50,
  },
});

export default HomeScreen;
