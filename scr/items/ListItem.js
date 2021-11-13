import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ name, onPress }) => {

    return (
        <TouchableOpacity style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}>
            <View>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
});

export default ListItem;