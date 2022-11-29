import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const Home = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text>Screen</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});