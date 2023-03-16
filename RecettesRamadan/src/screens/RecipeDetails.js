import React from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const RecipeDetails = ({recipe, onPress}) => {
  const {id, title, image} = recipe;
  const screenWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardImage source={{uri: image}} resizeMode="cover" />
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
};

const Card = styled.View`
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 60%;
`;

const CardContent = styled.View`
  padding: 16px;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export default RecipeDetails;
