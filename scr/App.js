import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyListsScreen from './screens/MyListsScreen';
import CreateNewListScreen from './screens/CreateNewListScreen';
import TodosScreen from './screens/TodosScreen';
import { SCREENS } from './config/screens';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={gestureHandlerRootHOC(SCREENS.MY_LISTS)}>
        <Stack.Screen name={SCREENS.MY_LISTS} component={gestureHandlerRootHOC(MyListsScreen)} />
        <Stack.Screen name={SCREENS.TODOS} component={gestureHandlerRootHOC(TodosScreen)} />
        <Stack.Screen name={SCREENS.CREATE_NEW_LIST} component={gestureHandlerRootHOC(CreateNewListScreen)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;