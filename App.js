import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import FabButton from './components/FabButton';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.todoView}>
        <Header />
      </View>

      <View style={styles.bottomView}>
        <FabButton />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  todoView: {
    flex: 4
  },
  bottomView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 35
  }
});

export default App;