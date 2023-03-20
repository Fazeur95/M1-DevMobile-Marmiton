import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import firebase from '../../config/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import BackgroundImage from '../../assets/profil-background.jpg';

const Profile = () => {
  const app = initializeApp(firebase);
  const auth = getAuth(app);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  //Check if user is logged in if yes redirect to home

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setToken(token);
    } else {
      setToken(null);
    }
  };

  useEffect(() => {
    checkToken();
    AsyncStorage.getItem('isLoggedIn')
      .then(value => {
        if (value === 'true') {
          setLoggedIn(true);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        AsyncStorage.removeItem('token');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      {token ? (
        <BackgroundImageView source={BackgroundImage}>
          <ContainerView>
            <ProfileContainer>
              <AvatarContainer>
                <AvatarText>{user?.email.substring(0, 1)}</AvatarText>
              </AvatarContainer>
              <InfoContainer>
                <InfoText>Email: {user?.email}</InfoText>
              </InfoContainer>
            </ProfileContainer>
            <LogoutButton onPress={handleSignOut}>
              <LogoutButtonText>Déconnexion</LogoutButtonText>
            </LogoutButton>
          </ContainerView>
        </BackgroundImageView>
      ) : (
        <BackgroundImageView source={BackgroundImage}>
          <ContainerView>
            <NotLoggedText>
              Inscrivez-vous ou connectez-vous pour accèder a votre profil
            </NotLoggedText>

            <RegisterLink onPress={() => navigation.navigate('Login')}>
              <LoginText>Se connecter</LoginText>
            </RegisterLink>
            <RegisterLink onPress={() => navigation.navigate('Register')}>
              <RegisterText>S'inscrire</RegisterText>
            </RegisterLink>
          </ContainerView>
        </BackgroundImageView>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const LoginText = styled.Text`
  color: #2f80ed;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
const RegisterText = styled.Text`
  color: #2f80ed;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const NotLoggedText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;

  text-align: center;
`;
const RegisterLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

const ContainerView = styled.View`
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const BackgroundImageView = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  resize-mode: stretch;
  margin: 0;
`;
const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const AvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #2f80ed;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const AvatarText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

const InfoContainer = styled.View`
  justify-content: center;
`;

const InfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LogoutButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #e74c3c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default Profile;
