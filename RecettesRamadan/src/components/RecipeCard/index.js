import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const RecipeCard = ({recipe}) => {
  return (
    <Container>
      <ImageContainer>
        <RecipeImage source={{uri: recipe.image}} />
      </ImageContainer>
      <Title>{recipe.title}</Title>
      <Subtitle>{recipe.description}</Subtitle>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const ImageContainer = styled.View`
  height: 150px;
`;

const RecipeImage = styled.Image`
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 16px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  margin: 0 16px 16px;
`;

export default RecipeCard;
