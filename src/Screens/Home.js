import * as React from 'react';
import {View, Text, Button} from 'react-native';
import strings from '../Localization';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{strings.hello}</Text>
      <Button
        title={'Go To second'}
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

export default HomeScreen;
