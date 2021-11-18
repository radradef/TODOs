import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => {

    return (
        <View style={styles.seprator} />
    );
}

const styles = StyleSheet.create({
    seprator: {
        height: 1,
        backgroundColor: "#e4e4e4",
    }
});