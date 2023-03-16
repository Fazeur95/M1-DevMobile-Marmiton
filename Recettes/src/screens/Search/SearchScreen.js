import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from '../../data/MockDataAPI';
import {TextInput} from 'react-native-gesture-handler';

export default function SearchScreen(props) {
  const {navigation} = props;

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <StyledView>
          <StyledImage source={require('../../../assets/icons/search.png')} />
          <StyledInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch('')}>
            <StyledImage source={require('../../../assets/icons/close.png')} />
          </Pressable>
        </StyledView>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  const StyledView = styled.View`flexDirection: "row", 
  alignItems: "center", 
  backgroundColor: "#EDEDED", 
  borderRadius: 10, 
  width: 250,
  justifyContent: "space-around",`;

  const StyledImage = styled.Image`width: 20,height: 20, 
  tintColor: 'grey',`;

  const StyledInput = styled.TextInput`backgroundColor: "#EDEDED",  color: "black",
  width: 180,
  height: 50, `;

  useEffect(() => {}, [value]);

  const handleSearch = text => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == '') {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

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
        data={data}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}
