import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = screen => {
    navigation.navigate(screen);
    setMenuOpen(false);
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton source={require('../../assets/back-arrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Title>MarmiHalal</Title>
      </TouchableOpacity>
      {menuOpen ? (
        <MenuContainer>
          <MenuOption onPress={() => handleNavigate('Home')}>
            <MenuText>Recettes du jour</MenuText>
          </MenuOption>
          <MenuOption onPress={() => handleNavigate('AllRecipes')}>
            <MenuText>Toute nos recettes</MenuText>
          </MenuOption>
          <MenuOption onPress={() => handleNavigate('AddRecipe')}>
            <MenuText>Ajouter une recette</MenuText>
          </MenuOption>
          <MenuOption onPress={() => handleNavigate('Profile')}>
            <MenuText>Profil</MenuText>
          </MenuOption>
        </MenuContainer>
      ) : (
        <TouchableOpacity onPress={() => handleMenuPress()}>
          <Logo source={require('../../assets/menu-icon.png')} />
        </TouchableOpacity>
      )}
    </Container>
  );
};
const DropdownMenu = styled.TouchableOpacity`
  position: relative;
`;

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
