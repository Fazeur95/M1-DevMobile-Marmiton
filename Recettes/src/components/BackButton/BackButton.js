import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export default function BackButton(props) {
  return (
    <StyledTouchableHighlight onPress={props.onPress}>
      <StyledImage source={require('../../../assets/icons/backArrow.png')} />
    </StyledTouchableHighlight>
  );
}

const StyledTouchableHighlight = styled.TouchableHighlight`width: 40,
height: 40,
borderRadius: 20,
backgroundColor: 'rgba(0,0,0,0.1)',
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,`;

const StyledImage = styled.Image`width: 20,
height: 20,`;

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
