import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      alert('Vous êtes connecté');
      navigation.navigate('Home');
      AsyncStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Identifiant ou Mot de passe incorrect');
    }
  };

  return (
    <Container>
      <Title>Connexion</Title>
      <Form>
        <Input
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.View`
  width: 80%;
`;

const Input = styled.TextInput`
  height: 48px;
  border-radius: 24px;
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 16px;
`;

const Button = styled.TouchableOpacity`
  height: 48px;
  border-radius: 24px;
  background-color: #007bff;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default Profile;
