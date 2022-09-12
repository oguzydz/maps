import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import mobileCaseData from "../assets/json/mobileCaseData";

import Button from '../components/Button';

const Launch = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.menuContainer}>
                {mobileCaseData?.regions?.map((item, index) => <Button key={index.toString()} region={item} />)}
            </SafeAreaView>
        </View>
    )
};

export default Launch;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        justifyContent: "center",
    },
    menuContainer: {
        paddingHorizontal: 32,
    }
});