import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home', {
            name: 'Hendryk', // Substitua pelo nome real
            email: email,
        });

      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
      });


  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
        source={require('react-native-firebase/src/images/logo-ifal.png')}
        style={styles.logo}
      />
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Email"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Senha"
        />

        <View style={styles.button}>
            <Button title="Login" style={styles.button} onPress={handleLogin} color="#00ff88"/>
        </View>
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#201b2c', // Cor de fundo escura
      padding: 20, // Espaçamento interno
    },
    
    card:{
        paddingTop: 40,
        width: "80%",
        backgroundColor: '#2f2841',
        alignItems: 'center',
        paddingBottom: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 10
    },

    label: {
      right: 100,
      fontSize: 16,
      marginBottom: 5,
      color: '#D8E3C6',
      fontSize: 14
      
    },
    input: {
      backgroundColor: '#514869',
      width: '90%', 
      height: 40,
      borderColor: '#999', 
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 8, 
      color: '#f0ffff94', 
      borderWidth: 0 
    },

    button: {
       marginTop: 20,
       marginBottom: 10,
       width: '80%',
       borderRadius: 8,
       backgroundColor: '#fff'
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});

export default Login;
