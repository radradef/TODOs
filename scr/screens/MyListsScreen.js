import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FabButton from '../components/FabButton';
import { SCREENS } from '../config/screens';
import ListItem from '../items/ListItem';

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

const MyListsScreen = ({ navigation, route }) => {

    const [lists, setLists] = useState(DEFAULT_LISTS);
    useLayoutEffect(() => {
        if (route.params) {
            let newLists = lists.concat({ id: route.params.id, name: route.params.name });
            setLists(newLists);
        }
    }, [route]);

    const renderItem = ({ item }) => (
        <ListItem name={item.name} onPress={() => handleOnListPress(item)} />
    );

    const handleOnListPress = (item) => {
        navigation.navigate(SCREENS.TODOS, item);
    }

    const cerateNewList = () => {
        navigation.navigate(SCREENS.CREATE_NEW_LIST);
    }

    return (
        <View style={styles.container}>

            <View style={styles.todoView}>
                <FlatList
                    data={lists}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.bottomView}>
                <FabButton onPress={cerateNewList} />
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

export default MyListsScreen;