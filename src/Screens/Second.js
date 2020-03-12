import * as React from 'react';
import {View, Text, Button} from 'react-native';

function SecondScreen({navigation, route: {params}}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
      <Text>Loaded from: {params.from}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SecondScreen;
