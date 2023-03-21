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
        <ScrollView>
          <Form>
            <Title>Ajouter une recette</Title>
            <TitleInput>Titre</TitleInput>
            <StyledTextInput
              placeholder="Titre"
              onChangeText={text => setRecipe({...recipe, title: text})}
              value={recipe.title}
              keyboardType="default"
            />
            <TitleInput>URL de l'image</TitleInput>
            <StyledTextInput
              placeholder="URL de l'image"
              onChangeText={text => setRecipe({...recipe, image: text})}
              value={recipe.image}
              keyboardType="default"
            />
            <TitleInput>Temps de préparation</TitleInput>
            <StyledTextInput
              placeholder="Temps de préparation (en minutes)"
              onChangeText={text =>
                setRecipe({...recipe, readyInMinutes: text})
              }
              value={recipe.readyInMinutes}
              keyboardType="numeric"
            />
            <TitleInput>Nombre de portions</TitleInput>
            <StyledTextInput
              placeholder="Nombre de portions"
              onChangeText={text => setRecipe({...recipe, servings: text})}
              value={recipe.servings}
              keyboardType="numeric"
            />
            <TitleInput>Ingrédients</TitleInput>
            <StyledTextInput
              placeholder="Ingrédients (séparés par des virgules)"
              onChangeText={text => setRecipe({...recipe, ingredients: text})}
              value={recipe.ingredients}
              multiline={true}
              numberOfLines={4}
              keyboardType="default"
            />
            <TitleInput>Instructions</TitleInput>
            <StyledTextInput
              placeholder="Instructions (séparées par des points)"
              onChangeText={text => setRecipe({...recipe, instructions: text})}
              value={recipe.instructions}
              multiline={true}
              numberOfLines={4}
              keyboardType="default"
            />
            <StyledButton title="Ajouter la recette" onPress={handleSubmit} />
          </Form>
        </ScrollView>
      </ContainerView>
    </BackgroundImageView>
  );
};
const TitleInput = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

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
  background-color: #f4511e;
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
  color: black;
  margin-bottom: 16px;
  padding: 8px;
`;

const Form = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export default AddRecipe;
