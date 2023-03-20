import styled from 'styled-components';
import AddRecipe from '../components/AddRecipe';

const AddRecipePage = () => {
  return (
    <Container>
      <AddRecipe />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;

export default AddRecipePage;
