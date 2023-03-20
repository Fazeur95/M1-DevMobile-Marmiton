import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeDetailsComponent = ({recipe}) => {
  const ingredients = recipe.extendedIngredients
    ? recipe.extendedIngredients.map(ingredient => ingredient.original)
    : [];
  const instructions = recipe.analyzedInstructions[0].steps
    ? recipe.analyzedInstructions[0].steps.map(step => step.step)
    : [];

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        const jsonValue = JSON.stringify(favorites);
        await AsyncStorage.setItem('favorites', jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    saveFavorites();
  }, [favorites]);

  const addToFavorites = recipe => {
    const isFavorite = favorites.find(favorite => favorite.id === recipe.id);
    if (!isFavorite) {
      setFavorites([...favorites, recipe]);
    } else {
      const newFavorites = favorites.filter(
        favorite => favorite.id !== recipe.id,
      );
      setFavorites(newFavorites);
    }
  };

  return (
    <Container>
      <Title>{recipe.title}</Title>
      <RecipeImage source={{uri: recipe.image}} resizeMode="cover">
        <StyledTouchableOpacity onPress={() => addToFavorites(recipe)}>
          <FavoriteIcon
            source={
              favorites.find(favorite => favorite.id === recipe.id)
                ? require('../../assets/heart-filled.png')
                : require('../../assets/heart-outline.png')
            }
          />
        </StyledTouchableOpacity>
      </RecipeImage>

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

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`;
const FavoriteIcon = styled.Image`
  width: 32px;
  height: 32px;
`;
const RecipeImage = styled.ImageBackground`
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

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
