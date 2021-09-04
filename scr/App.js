import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import FabButton from './components/FabButton';
import ListItem from './items/ListItem';

const DEFAULT_LISTS = [
  {
    id: 1,
    name: 'Shopping',
  },
  {
    id: 2,
    name: 'Personal',
  }
];

const App = () => {

  const [lists, setLists] = useState(DEFAULT_LISTS);

  const renderItem = ({ item }) => (
    <ListItem name={item.name} />
  );

  const addList = () => {
    let id = lists.length + 1;
    let newLists = [...lists, { id, name: "New List" }];
    setLists(newLists);
  }

  return (
    <View style={styles.container}>

      <View style={styles.todoView}>
        <Header />
        <FlatList
          data={lists}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.bottomView}>
        <FabButton onPress={addList} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE1E0'
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