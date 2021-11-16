import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FabButton from '../components/FabButton';
import { SCREENS } from '../config/screens';
import ListItem from '../items/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyListsScreen = ({ navigation, route }) => {

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

    const storeListsToStorage = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('lists', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    const getListsFromStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('lists')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    }

    const [lists, setLists] = useState(DEFAULT_LISTS);

    useLayoutEffect(() => {
        if (route.params) {
            let listsUpdated = [...lists, route.params];
            (async () => {
                await storeListsToStorage(listsUpdated);
                setLists(listsUpdated);
            })();
        } else {
            (async () => {
                let storedLists = await getListsFromStorage();
                if (storedLists) {
                    setLists(storedLists);
                }
            })();
        }
    }, [route]);

    const renderItem = ({ item }) => (
        <ListItem listItem={item}
            onListPress={() => handleOnListPress(item)}
            onDeletePress={() => handleOnDeletePress(item)} />
    );

    const handleOnListPress = (item) => {
        navigation.navigate(SCREENS.TODOS, item);
    }

    const handleOnDeletePress = async (item) => {
        let listsUpdated = lists.filter(i => i.id != item.id);
        await storeListsToStorage(listsUpdated);
        setLists(listsUpdated);
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