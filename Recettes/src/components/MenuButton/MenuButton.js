import React from 'react';
import {TouchableHighlight, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export default function MenuButton(props) {
  const {title, onPress, source} = props;

  return (
    <StyledTouchableHighlight
      onPress={onPress}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <StyledView>
        <StyledImage source={source} />
        <StyledText>{title}</StyledText>
      </StyledView>
    </StyledTouchableHighlight>
  );
}

const StyledTouchableHighlight = styled.TouchableHighlight` width: 100,
height: 100,
borderRadius: 50,
backgroundColor: 'rgba(0,0,0,0.1)',
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,`;

const StyledView = styled.View` width: 80,
height: 80,
borderRadius: 40,
backgroundColor: 'rgba(0,0,0,0.1)',
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,`;

const StyledImage = styled.Image`width: 40,
height: 40,`;

const StyledText = styled.Text`fontSize: 12,
color: 'black',`;

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
