import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCard from '../RecipeCard';
import {useNavigation} from '@react-navigation/native';

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Récupération des recettes favorites depuis AsyncStorage
    const getFavoriteRecipes = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('favorites');
        if (jsonValue != null) {
          setFavoriteRecipes(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error(e);
      }
    };

    getFavoriteRecipes();
  }, []);

  const handleRecipePress = recipe => {
    // Navigation vers la page RecipeDetails avec la recette sélectionnée
    navigation.navigate('RecipeDetails', {recipe});
  };

  const handleRemoveFavorite = async recipe => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      const value = JSON.parse(jsonValue);
      const updatedValue = value.filter(item => item.id !== recipe.id);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedValue));
      setFavoriteRecipes(updatedValue);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      {favoriteRecipes.length > 0 ? (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleRecipePress(item)}>
              <RecipeCard recipe={item} />
              <RemoveButton onPress={() => handleRemoveFavorite(item)}>
                <RemoveButtonText>Supprimer des favoris</RemoveButtonText>
              </RemoveButton>
            </TouchableOpacity>
          )}
        />
      ) : (
        <NoFavoriteText>Aucune recette favorite pour le moment</NoFavoriteText>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;
const RemoveButton = styled.TouchableOpacity`
  background-color: #f44336;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
const RemoveButtonText = styled.Text`
  color: white;
  text-align: center;
`;
const NoFavoriteText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export default FavoriteRecipes;
