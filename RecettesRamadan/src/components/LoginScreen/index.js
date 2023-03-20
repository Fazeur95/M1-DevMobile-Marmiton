import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import firebaseConfig from '../../config/firebase';
import BackGroundImage from '../../assets/login-background.jpg';

const LoginScreen = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
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
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <BackGroundImageView source={BackGroundImage}>
        <ContainerView>
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
          <Button onPress={handleLogin}>
            <ButtonText>Connexion</ButtonText>
          </Button>
          <RegisterLink onPress={() => navigation.navigate('Register')}>
            <RegisterText>
              Vous n'avez pas encore de compte ? Inscrivez vous !
            </RegisterText>
          </RegisterLink>
        </ContainerView>
      </BackGroundImageView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const ContainerView = styled.View`
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;
const BackGroundImageView = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  resize-mode: stretch;
  margin: 0;
`;
const Input = styled.TextInput`
  height: 50px;
  border: 1px solid #aaa;
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

export default LoginScreen;
