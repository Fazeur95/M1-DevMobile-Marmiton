import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
        <Text>Go to Recipe</Text>
      </TouchableOpacity>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
