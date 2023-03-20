import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import RecipeCard from '../RecipeCard';

const API_KEY = '1d84e3896b304a139dec822b33e3a929';
const API_URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error(error));
  }, []);

  const handleRecipePress = recipe => {
    navigation.navigate('RecipeDetails', {recipe});
  };

  return (
    <Container>
      <Title>Les recettes du jour</Title>
      <StyledView>
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleRecipePress(item)}>
              <RecipeCard recipe={item} />
            </TouchableOpacity>
          )}
        />
      </StyledView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;
const StyledView = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  align-self: center;
`;

export default HomeScreen;
