import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const ListItem = ({ listItem, onListPress, onDeletePress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.listView}
                activeOpacity={0.7}
                onPress={onListPress}>
                <Text>{listItem.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}
                onPress={onDeletePress}>
                <Icon name="delete" size={25} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
    },
    listView: {
        flex: 6,
        paddingLeft: 12,
        backgroundColor: 'white',
        height: 40,
        justifyContent: 'center',
    },
    deleteBtn: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ListItem;