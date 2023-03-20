import HomeScreen from '../components/HomeScreen';
import styled from 'styled-components/native';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Container>
      <HomeScreen />
    </Container>
  );
};
export default Home;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 16px;
`;
