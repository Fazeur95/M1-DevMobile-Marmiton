import styled from 'styled-components';
import AddRecipe from '../components/AddRecipe';

const AddRecipePage = () => {
  return (
    <Container>
      <Title>Ajouter une recette</Title>
      <AddRecipe />
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
`;

export default AddRecipePage;
