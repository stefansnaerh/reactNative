import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import classPhoto from './assets/classImage.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Hello Vefskóli!</Text>
      <Text style={styles.paragraph}>Thanks for a great school year and a awesome trip to Las Palmas! </Text>
      <Image
      style={styles.image}
      source={classPhoto}
      />
      <Text style={styles.paragraph}>Good luck on your future endeavors!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    fontSize: 32,
  },
  paragraph: {
    fontSize: 20,
    width: "80%",
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
});
