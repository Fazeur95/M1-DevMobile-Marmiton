import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const RecipeCard = ({recipe}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('RecipeDetails', {recipe});
  };

  return (
    <Container>
      <TouchableRecipe onPress={handlePress}>
        <RecipeImage source={{uri: recipe.image}} />
        <RecipeTitle>{recipe.title}</RecipeTitle>
      </TouchableRecipe>
    </Container>
  );
};

const Container = styled.View`
  width: 50%;
  padding: 10px;
`;

const TouchableRecipe = styled.TouchableOpacity`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  elevation: 2;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 150px;
`;

const RecipeTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`;

export default RecipeCard;
