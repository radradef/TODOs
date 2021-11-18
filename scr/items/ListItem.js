import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Swipeable } from 'react-native-gesture-handler';

const ListItem = ({ listItem, onListPress, onDeletePress }) => {

    const RightActions = () => {

        return (
            <TouchableOpacity style={styles.deleteBtn}
                onPress={onDeletePress}>
                <Icon name="delete" size={25} color="black" />
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <Swipeable
                rightThreshold={70}
                overshootRight={false}
                renderRightActions={RightActions}>
                <TouchableOpacity style={styles.listView}
                    activeOpacity={0.7}
                    onPress={onListPress}>
                    <Text style={styles.listViewText}>{listItem.name}</Text>
                </TouchableOpacity>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'white',
        height: 60,
        justifyContent: 'center',
    },
    listViewText: {
        padding: 12,
        fontWeight: "600",
        fontSize: 15,
    },
    deleteBtn: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
    },
});

export default ListItem;