import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';
import firebase from '../../config/firebase';
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const app = initializeApp(firebase);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        AsyncStorage.removeItem('token');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      <ProfileContainer>
        <AvatarContainer>
          <AvatarText>{user?.email.substring(0, 1)}</AvatarText>
        </AvatarContainer>
        <InfoContainer>
          <InfoText>Email: {user?.email}</InfoText>
        </InfoContainer>
      </ProfileContainer>
      <LogoutButton onPress={handleSignOut}>
        <LogoutButtonText>Déconnexion</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 30px;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const AvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #2f80ed;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const AvatarText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

const InfoContainer = styled.View``;

const InfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LogoutButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #e74c3c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default Profile;
