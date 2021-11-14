import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { SCREENS } from '../config/screens';
import uuid from 'react-native-uuid';

const CreateNewListScreen = ({ navigation }) => {
    const [listName, setListName] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={createNewList}
                    title="Done"
                />)
        });
    });

    const createNewList = () => {
        if (listName) {
            navigation.navigate(SCREENS.MY_LISTS, { id: uuid.v4(), name: listName });
        } else {
            navigation.navigate(SCREENS.MY_LISTS);
        }

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setListName}
                value={listName}
                placeholder="List Name"
                autoFocus={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default CreateNewListScreen;