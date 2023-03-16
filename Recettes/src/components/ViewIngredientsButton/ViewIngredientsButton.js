import React from 'react';
import {TouchableHighlight, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export default function ViewIngredientsButton(props) {
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}>
      <StyledView>
        <StyledText>Voir les Ingrédients</StyledText>
      </StyledView>
    </TouchableHighlight>
  );
}

const StyledView = styled.View`height: 45,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom: 20,
width: 250,
borderRadius: 30,
backgroundColor: 'transparent',`;

const StyledText = styled.Text`color: 'white', fontSize: 20,`;

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
