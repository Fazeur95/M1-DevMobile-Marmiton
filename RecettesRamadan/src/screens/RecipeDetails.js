import React from 'react';
import {ScrollView} from 'react-native';

import RecipeDetailsComponent from '../components/RecipeDetails';

const RecipeDetails = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView>
      <RecipeDetailsComponent recipe={recipe} />
    </ScrollView>
  );
};

export default RecipeDetails;
