import React from 'react';

import styled from 'styled-components';

import RegisterScreen from '../components/RegisterScreen';

const Register = () => {
  return (
    <Container>
      <RegisterScreen />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

export default Register;
