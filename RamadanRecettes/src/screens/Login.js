import React from 'react';

import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Login;
