import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const getFavoriteRecipes = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('favorites');
        if (jsonValue != null) {
          setFavoriteRecipes(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error(e);
      }
    };

    getFavoriteRecipes();
  }, []);

  useEffect(() => {
    setFavoriteNumber(favoriteRecipes.length);
  }, [favoriteRecipes]);

  useEffect(() => {
    const updateFavoriteRecipes = async () => {
      try {
        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify(favoriteRecipes),
        );
      } catch (e) {
        console.error(e);
      }
    };

    updateFavoriteRecipes();
  }, [favoriteRecipes]);

  return (
    <FooterContainer>
      <ProfilButton onPress={() => navigation.navigate('Profil')}>
        <Logo source={require('../../assets/profil-icon.png')} />
      </ProfilButton>
      <HomeButton onPress={() => navigation.navigate('Home')}>
        <Logo source={require('../../assets/home-icon.png')} />
      </HomeButton>
      <FavoriteButton onPress={() => navigation.navigate('Favori')}>
        <Logo source={require('../../assets/heart-outline.png')} />

        {favoriteNumber > 0 && (
          <FavoriteNumber>{favoriteNumber}</FavoriteNumber>
        )}
      </FavoriteButton>
    </FooterContainer>
  );
};

const FavoriteNumber = styled.Text`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 15px;
  min-height: 15px;
  text-align: center;
  overflow: hidden;
  font-size: 10px;
`;

const FooterContainer = styled.View`
  background-color: #ff6f61;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

const ProfilButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding-horizontal: 12px;
  padding-vertical: 8px;
`;
const HomeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding-horizontal: 12px;
  padding-vertical: 8px;
`;

const FavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding-horizontal: 12px;
  padding-vertical: 8px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
`;

export default Footer;
