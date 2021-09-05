import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyListsScreen from './screens/MyListsScreen';
import CreateNewListScreen from './screens/CreateNewListScreen';
import TodosScreen from './screens/TodosScreen';
import { SCREENS } from './config/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.MY_LISTS}>
          <Stack.Screen name={SCREENS.MY_LISTS} component={MyListsScreen} />
          <Stack.Screen name={SCREENS.TODOS} component={TodosScreen} />
          <Stack.Screen name={SCREENS.CREATE_NEW_LIST} component={CreateNewListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;