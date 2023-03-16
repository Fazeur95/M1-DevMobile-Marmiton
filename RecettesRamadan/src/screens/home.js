import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import RecipeCard from '../components/RecipeCard';

const API_KEY = '78759fa899b34b5ea0f2cfba60aacb5e';
const API_URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Title>Les recettes du jours</Title>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => <RecipeCard recipe={item} />}
      />
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

export default Home;
