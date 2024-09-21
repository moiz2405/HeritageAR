import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7', // Softer background color for better contrast
  },
  title: {
    fontSize: 26, // Slightly larger for more emphasis
    fontWeight: '700', // Bolder for stronger hierarchy
    color: '#333', // Darker color for contrast
    marginBottom: 15, // Adjusted margin for better spacing
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555', // Softer color to distinguish from title
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666', // A slightly muted tone for body text
    lineHeight: 24, // Improved readability with line spacing
  },
  card: {
    padding: 20, // Increased padding for more breathing room
    marginVertical: 12,
    backgroundColor: '#fff', // Clean white for the card
    borderRadius: 12, // More rounded corners for a modern look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 }, // Slightly deeper shadow
    shadowOpacity: 0.15, // Increased opacity for better definition
    shadowRadius: 4, // More prominent shadow
    elevation: 5, // Improved elevation for Android
    borderWidth: 1, // Subtle border to enhance the card's appearance
    borderColor: '#e0e0e0', // Light border color for clean separation
  },
  button: {
    backgroundColor: '#007bff', // Blue for call-to-action buttons
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row', // For side-by-side layout (e.g., icons and text)
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});
