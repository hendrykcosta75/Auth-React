import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Home = ({ route }) => {
  const { name, email } = route.params;

  return (
    
    <View style={styles.container}>
      <View style={styles.perfil}>
      <Image
        source={require('react-native-firebase/src/images/3135715.png')}
        style={styles.logo}
      />
      
      <Text style={styles.label}>Nome: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
       
      </View>
    </View>

    
     
    
  );
};

const styles = StyleSheet.create({

    container:{
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#201b2c', // Cor de fundo escura
      padding: 20, // Espaçamento interno
    },

    perfil: {
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

    infoUser: {
        
    },

    logo: {
      width: 100,
      height: 100,
      marginBottom: 20
    },

    label: {
      right: 5,
      fontSize: 16,
      marginBottom: 5,
      color: '#D8E3C6',
      fontSize: 14
      
    }

});


export default Home;
