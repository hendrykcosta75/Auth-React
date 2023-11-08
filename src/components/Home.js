import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};



export default Home;
