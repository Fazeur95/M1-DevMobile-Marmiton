import React, {useState, useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  useFocusEffect,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifee from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../config/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';

const Header = ({title}) => {
  const navigation = useNavigation();
  const app = initializeApp(firebase);
  const auth = getAuth(app);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(null);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
    console.log(setLoggedIn);
  };
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setToken(token);
    } else {
      setToken(null);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        AsyncStorage.removeItem('token');
        navigation.navigate('Home');
        Notifee.displayNotification({
          title: 'Aurevoir',
          body: 'Vous êtes déconnecté !',
          android: {
            channelId: 'default',
          },
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Vérifier si le token est toujours valide
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

  const handleNavigate = screen => {
    navigation.navigate(screen);
    setMenuOpen(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('isLoggedIn')
      .then(value => {
        if (value === 'true') {
          setLoggedIn(true);
        }
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton source={require('../../assets/back-arrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Title>MarmYnov</Title>
      </TouchableOpacity>
      {menuOpen && (
        <MenuContainer>
          <MenuOption onPress={() => handleNavigate('AllRecipes')}>
            <MenuText>Toute nos recettes</MenuText>
          </MenuOption>
          <MenuOption onPress={() => handleNavigate('AddRecipe')}>
            <MenuText>Ajouter une recette</MenuText>
          </MenuOption>

          {token ? (
            <>
              <MenuOption onPress={() => handleNavigate('Profil')}>
                <MenuText>Profil</MenuText>
              </MenuOption>
              <MenuOption onPress={() => handleSignOut()}>
                <MenuText>Déconnexion</MenuText>
              </MenuOption>
            </>
          ) : (
            <>
              <MenuOption onPress={() => handleNavigate('Login')}>
                <MenuText>Connexion</MenuText>
              </MenuOption>
              <MenuOption onPress={() => handleNavigate('Register')}>
                <MenuText>Inscription</MenuText>
              </MenuOption>
            </>
          )}
        </MenuContainer>
      )}
      <TouchableOpacity onPress={() => handleMenuPress()}>
        <Logo source={require('../../assets/menu-icon.png')} />
      </TouchableOpacity>
    </Container>
  );
};

const MenuContainer = styled.View`
  position: absolute;
  top: 60px;
  right: 0;
  width: 150px;
  border-radius: 10px;
  background-color: #ffffff;
  shadow-color: #000000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
  z-index: 1;
`;
const MenuOption = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`;
const MenuText = styled.Text`
  font-size: 18px;
`;
const Container = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  elevation: 2;
  background-color: #ff6f61;
`;

const BackButton = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Logo = styled.Image`
  width: 55px;
  height: 55px;
  justify-content: center;
`;

export default Header;
