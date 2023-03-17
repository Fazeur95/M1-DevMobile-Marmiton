import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import styled from 'styled-components';
import Home from '../screens/home';
import RecipeDetails from '../screens/RecipeDetails';
import AddRecipe from '../components/AddRecipe';
import AllRecipe from '../screens/AllRecipes';
import Header from '../components/header';
import Login from '../screens/login';
import Profil from '../screens/profil';
import Register from '../screens/register';
import Favori from '../screens/favori';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({navigation}) => <Header navigation={navigation} />,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AllRecipes" component={AllRecipe} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
          <Stack.Screen name="Favori" component={Favori} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: red;
`;

export default Routes;
