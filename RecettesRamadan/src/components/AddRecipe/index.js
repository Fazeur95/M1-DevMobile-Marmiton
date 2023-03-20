import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import BackgroundImage from '../../assets/profil-background.jpg';

const API_URL = 'https://api.spoonacular.com/recipes';

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
      const response = await axios.post(`${API_URL}/complexSearch`, {
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
    <BackgroundImageView source={BackgroundImage}>
      <ContainerView>
        <Title>Ajouter une recette</Title>
        <ScrollView>
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
              onChangeText={text =>
                setRecipe({...recipe, readyInMinutes: text})
              }
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
            <StyledButton title="Ajouter la recette" onPress={handleSubmit} />
          </Form>
        </ScrollView>
      </ContainerView>
    </BackgroundImageView>
  );
};

const ContainerView = styled.View`
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0);
`;
const BackgroundImageView = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  resize-mode: stretch;
  margin: 0;
`;

const StyledButton = styled.Button`
  color: black;
  border-radius: 4px;
  padding: 12px 32px;
  margin: 16px 0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;

  margin-bottom: 16px;
  align-self: center;
`;

const StyledTextInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;

  margin-bottom: 16px;
  padding: 8px;
`;

const Form = styled.View`
  flex: 1;
`;

export default AddRecipe;
