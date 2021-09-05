import React, { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const TodosScreen = ({ navigation, route }) => {

    const [title, setTitle] = useState(route.params.name);
    useLayoutEffect(() => {
        navigation.setOptions({
            title
        });
    });

    return (
        <View>
            
        </View>
    );
}

export default TodosScreen;