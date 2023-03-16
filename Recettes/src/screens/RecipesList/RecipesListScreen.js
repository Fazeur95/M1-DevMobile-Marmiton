import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styled from 'styled-components/native';
import {getRecipes, getCategoryName} from '../../data/MockDataAPI';

export default function RecipesListScreen(props) {
  const {navigation, route} = props;

  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = item => {
    navigation.navigate('Recipe', {item});
  };

  const renderRecipes = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <StyledViewContainer>
        <StyledPhoto source={{uri: item.photo_url}} />
        <StyledText>{item.title}</StyledText>
        <StyledCategory>{getCategoryName(item.categoryId)}</StyledCategory>
      </StyledViewContainer>
    </TouchableHighlight>
  );

  const StyledViewContainer = styled.View`flex: 1,
  justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15, `;

  const StyledPhoto = styled.Image`width: 100, borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0, `;

  const StyledText = styled.Text`flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,`;
  const StyledCategory = styled.Text` marginTop: 5,
    marginBottom: 5, `;

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}
