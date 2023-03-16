import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profil = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('lastName', lastName);
      alert('Information Enregistrée');
    } catch (error) {
      alert(error);
    }
  };

  const loadData = async () => {
    try {
      const savedFirstName = await AsyncStorage.getItem('firstName');
      const savedLastName = await AsyncStorage.getItem('lastName');
      if (savedFirstName !== null) {
        setFirstName(savedFirstName);
      }
      if (savedLastName !== null) {
        setLastName(savedLastName);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Title>Profil</Title>
      <Form>
        <InputLabel>Prénom</InputLabel>
        <Input
          placeholder="Entrez votre prénom"
          value={firstName}
          onChangeText={setFirstName}
        />
        <InputLabel>Nom de famille</InputLabel>
        <Input
          placeholder="Entrez votre nom de famille"
          value={lastName}
          onChangeText={setLastName}
        />
        <Button onPress={saveData}>
          <ButtonText>Enregistrer</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.View`
  width: 80%;
`;

const InputLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  height: 48px;
  border-radius: 24px;
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 16px;
`;

const Button = styled.TouchableOpacity`
  height: 48px;
  border-radius: 24px;
  background-color: #007bff;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default Profil;
