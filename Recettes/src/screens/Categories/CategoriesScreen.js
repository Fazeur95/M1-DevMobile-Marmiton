import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import {categories} from '../../data/dataArrays';
import {getNumberOfRecipes} from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';

export default function CategoriesScreen(props) {
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = item => {
    const title = item.name;
    const category = item;
    navigation.navigate('RecipesList', {category, title});
  };

  const renderCategory = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}>
      <StyledView>
        <StyledImage source={{uri: item.photo_url}} />
        <StyledTextName>{item.name}</StyledTextName>
        <StyledTextInfo>{getNumberOfRecipes(item.id)} recipes</StyledTextInfo>
      </StyledView>
    </TouchableHighlight>
  );

  const StyledView = styled.View`
  flex: 1,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  height: 215,
  borderColor: '#cccccc',
  borderWidth: 0.5,
  borderRadius: 20,`;

  const StyledImage = styled.Image`width: '100%',
  height: 155,
  borderRadius: 20,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  shadowColor: 'blue',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
  elevation: 3,`;

  const StyledTextName = styled.Text`   flex: 1,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#333333',
  marginTop: 8,`;

  const StyledTextInfo = styled.Text`   marginTop: 3,
  marginBottom: 5,`;

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
