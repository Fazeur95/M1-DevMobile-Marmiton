import React, {useState, useEffect} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = '1d84e3896b304a139dec822b33e3a929';

const RecipesScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

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

  const handleRecipePress = recipe => {
    navigation.navigate('RecipeDetails', {recipe});
  };
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

  const renderRecipe = ({item}) => {
    const isFavorite = favorites.find(favorite => favorite.id === item.id);
    return (
      <RecipeContainer onPress={() => handleRecipePress(item)}>
        <RecipeImage source={{uri: item.image}} />
        <RecipeTitle>{item.title}</RecipeTitle>
        <TouchableOpacity onPress={() => addToFavorites(item)}>
          <FavoriteIcon
            source={
              isFavorite
                ? require('../../assets/heart-filled.png')
                : require('../../assets/heart-outline.png')
            }
          />
        </TouchableOpacity>
      </RecipeContainer>
    );
  };

  return (
    <Container>
      <SearchInput
        placeholder="Cherchez votre recette..."
        onChangeText={setSearchQuery}
      />
      <SearchIcon
        source={require('../../assets/search-icon.png')}
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

const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const SearchInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;

const RecipeContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

const RecipeImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const RecipeTitle = styled.Text`
  font-size: 16px;
  flex: 1;
  margin: 8px;
`;

const FavoriteIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export default RecipesScreen;
