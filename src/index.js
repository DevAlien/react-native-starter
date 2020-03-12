import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {store, persist} from './Redux';
import Screens from './Screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  const loaded = (
    <Provider store={store}>
      <Screens />
    </Provider>
  );

  return ready ? loaded : loading;
}
