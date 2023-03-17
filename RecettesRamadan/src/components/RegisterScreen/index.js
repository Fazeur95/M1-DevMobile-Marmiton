import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import firebase from '../../config/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Register = () => {
  const app = initializeApp(firebase);
  const auth = getAuth(app);
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const HandleRegister = () => {
    if (inputs.password == inputs.password_confirmation) {
      createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          return userCredential.user.getIdToken();
          // ...
        })
        .then(accessToken => {
          AsyncStorage.setItem('token', accessToken);
          navigation.navigate('Home');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      console.log('Les mots de passes ne correspondent pas ');
    }
  };
  return (
    <Container>
      <InputTitle>Adresse Email</InputTitle>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChangeText={text => setInputs({...inputs, email: text})}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <InputTitle>Mot de Passe</InputTitle>
      <Input
        placeholder="Mot de passe"
        value={inputs.password}
        secureTextEntry
        onChangeText={text => setInputs({...inputs, password: text})}
      />
      <InputTitle>Confirmez votre Mot de Passe</InputTitle>
      <Input
        placeholder="Confirmez votre mot de passe"
        value={inputs.password_confirmation}
        secureTextEntry
        onChangeText={text =>
          setInputs({...inputs, password_confirmation: text})
        }
      />
      <Button onPress={HandleRegister}>
        <ButtonText>Inscription</ButtonText>
      </Button>
      <RegisterLink onPress={() => navigation.navigate('Login')}>
        <RegisterText>Vous avez déjà un compte ? Connectez-vous !</RegisterText>
      </RegisterLink>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 30px;
  justify-content: center;
`;

const Input = styled.TextInput`
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
const InputTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #2f80ed;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
const RegisterLink = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

const RegisterText = styled.Text`
  color: #2f80ed;
  font-size: 16px;
`;

export default Register;
