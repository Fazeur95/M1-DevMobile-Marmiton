import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import Profil from '../components/Profil';

const ProfilScreen = () => {
  return (
    <Container>
      <Profil />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

export default ProfilScreen;
