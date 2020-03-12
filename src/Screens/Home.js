import * as React from 'react';
import {View, Text, Button} from 'react-native';
import strings from '../Localization';
import {useDispatch} from 'react-redux';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{strings.hello}</Text>
      <Button
        title={'Go To second'}
        onPress={() =>
          navigation.navigate('Second', {from: 'Normal navigation'})
        }
      />
      <Button
        title={'naviogate with redux saga'}
        onPress={() => dispatch({type: 'LOAD_SECOND_SCREEN'})}
      />
    </View>
  );
}

export default HomeScreen;
