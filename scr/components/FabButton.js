import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const FabButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} testID="fabButton">
            <View style={styles.fabButtonView}>
                <Icon name="plus" size={50} color="black" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fabButtonView: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'white'
    },
});

export default FabButton;