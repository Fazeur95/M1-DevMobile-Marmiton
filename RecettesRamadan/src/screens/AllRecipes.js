import Recipes from '../components/Recipes';
import styled from 'styled-components';

const AllRecipes = () => {
  return (
    <Container>
      <Title>Nos recettes</Title>
      <Recipes />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  align-self: center;
  text-transform: uppercase;
`;

export default AllRecipes;
