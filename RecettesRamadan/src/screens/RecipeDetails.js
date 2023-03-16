import React from 'react';
import {Image, ScrollView} from 'react-native';
import styled from 'styled-components';

import RecipeDetailsComponent from '../components/RecipeDetails';

const RecipeDetails = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView>
      <Container>
        <RecipeImage source={{uri: recipe.image}} resizeMode="cover" />
        <RecipeDetailsComponent recipe={recipe} />
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
`;

export default RecipeDetails;
