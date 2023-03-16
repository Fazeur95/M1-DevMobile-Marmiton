import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton source={require('../../assets/back-arrow.png')} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <Logo source={require('../../assets/logo.png')} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const BackButton = styled.Image`
  width: 24px;
  height: 24px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export default Header;
