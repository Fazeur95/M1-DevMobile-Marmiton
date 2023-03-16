import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export default function MenuImage(props) {
  return (
    <StyledTouchableOpacity onPress={props.onPress}>
      <StyledImage source={require('../../../assets/icons/menu.png')} />
    </StyledTouchableOpacity>
  );
}

const StyledTouchableOpacity = styled.TouchableOpacity`width: 40,
height: 40,
borderRadius: 20,
backgroundColor: 'rgba(0,0,0,0.1)',
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,`;

const StyledImage = styled.Image`width: 20,
height: 20,`;

MenuImage.propTypes = {
  onPress: PropTypes.func,
};
