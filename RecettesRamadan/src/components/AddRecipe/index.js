import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';

const API_URL = 'https://api.spoonacular.com/recipes/visualizeRecipe';

const AddRecipe = ({navigation}) => {
  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    readyInMinutes: '',
    servings: '',
    ingredients: '',
    instructions: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/create`, {
        title: recipe.title,
        image: recipe.image,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings,
        extendedIngredients: recipe.ingredients.split(','),
        instructions: recipe.instructions.split('.'),
      });

      console.log(response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Ajouter une recette</Title>
      <Form>
        <StyledTextInput
          placeholder="Titre"
          onChangeText={text => setRecipe({...recipe, title: text})}
          value={recipe.title}
        />
        <StyledTextInput
          placeholder="URL de l'image"
          onChangeText={text => setRecipe({...recipe, image: text})}
          value={recipe.image}
        />
        <StyledTextInput
          placeholder="Temps de préparation"
          onChangeText={text => setRecipe({...recipe, readyInMinutes: text})}
          value={recipe.readyInMinutes}
        />
        <StyledTextInput
          placeholder="Nombre de portions"
          onChangeText={text => setRecipe({...recipe, servings: text})}
          value={recipe.servings}
        />
        <StyledTextInput
          placeholder="Ingrédients (séparés par des virgules)"
          onChangeText={text => setRecipe({...recipe, ingredients: text})}
          value={recipe.ingredients}
          multiline={true}
          numberOfLines={4}
        />
        <StyledTextInput
          placeholder="Instructions (séparées par des points)"
          onChangeText={text => setRecipe({...recipe, instructions: text})}
          value={recipe.instructions}
          multiline={true}
          numberOfLines={4}
        />
        <Button title="Ajouter la recette" onPress={handleSubmit} />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledTextInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;

  margin-bottom: 16px;
  padding: 8px;
`;

const Form = styled.View`
  flex: 1;
`;

export default AddRecipe;
