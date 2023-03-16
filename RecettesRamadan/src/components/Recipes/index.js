import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';

const API_KEY = '78759fa899b34b5ea0f2cfba60aacb5e';

const RecipesScreen = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchQuery}&addRecipeInformation=true`,
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [searchQuery]);

  const renderRecipe = ({item}) => {
    return (
      <RecipeContainer
        onPress={() =>
          navigation.navigate('RecipeDetails', {recipeId: item.id})
        }>
        <RecipeImage source={{uri: item.image}} />
        <RecipeTitle>{item.title}</RecipeTitle>
      </RecipeContainer>
    );
  };

  return (
    <Container>
      <SearchInput
        placeholder="Cherchez votre recette..."
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SearchInput = styled.TextInput`
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
`;

const RecipeContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const RecipeImage = styled.Image`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;

const RecipeTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export default RecipesScreen;
