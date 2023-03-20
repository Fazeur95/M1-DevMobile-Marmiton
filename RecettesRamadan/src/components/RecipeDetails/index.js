import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const RecipeDetailsComponent = ({recipe}) => {
  const ingredients = recipe.extendedIngredients
    ? recipe.extendedIngredients.map(ingredient => ingredient.original)
    : [];
  const instructions = recipe.analyzedInstructions[0].steps
    ? recipe.analyzedInstructions[0].steps.map(step => step.step)
    : [];

  return (
    <Container>
      <Title>{recipe.title}</Title>
      <SectionTitle>Ingrédients:</SectionTitle>
      {ingredients.map((ingredient, index) => (
        <IngredientText key={index}>{ingredient}</IngredientText>
      ))}
      <SectionTitle>Instructions:</SectionTitle>
      {instructions.map((instruction, index) => (
        <InstructionText key={index}>
          {index + 1}. {instruction}
        </InstructionText>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-vertical: 8px;
`;

const IngredientText = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
`;

const InstructionText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export default RecipeDetailsComponent;
