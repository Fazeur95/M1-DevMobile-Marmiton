import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';

export default function SplashScreen() {
  return (
    <StyledView>
      <StyledImage source={require('../../../assets/icons/cookie100.png')} />
    </StyledView>
  );
}

const StyledView = styled.View`flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#2cd18a', `;

const StyledImage = styled.Image` width: 150,
height: 150`;
