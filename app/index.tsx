import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importation correcte
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Identifiant et mot de passe en dur
  const correctIdentifiant = 'user';
  const correctPassword = 'mdp';

  const handleLogin = () => {
    // Vérification des identifiants en dur
    if (identifiant === correctIdentifiant && password === correctPassword) {
      router.push('/camera'); // Redirige vers la page caméra si la connexion est réussie
    } else {
      Alert.alert("Erreur", "Identifiant ou mot de passe incorrect.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Icône React */}
      <MaterialCommunityIcons name="react" size={80} color="#61DAFB" style={styles.icon} />

      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Identifiant"
        placeholderTextColor="#888"
        value={identifiant}
        onChangeText={setIdentifiant}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Se connecter" onPress={handleLogin} color="#007acc" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 15,
    color: '#007acc',
    textDecorationLine: 'underline',
  },
});
