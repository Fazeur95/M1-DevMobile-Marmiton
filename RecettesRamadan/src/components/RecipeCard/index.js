//Create a RecipeCard component

// Path: src\components\RecipeCard\index.js

import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const RecipeCard = ({recipe}) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          source={{uri: recipe.image}}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
      </ImageContainer>
      <TextContainer>
        <Title>{recipe.title}</Title>
        <Text>{recipe.readyInMinutes} minutes</Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const ImageContainer = styled.View`
  flex: 1;
`;

const TextContainer = styled.View`
  flex: 2;
  padding-left: 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export default RecipeCard;
