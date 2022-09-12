import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CloseIcon = require('../assets/img/close-icon.png')

const Header = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { top: insets?.top }]}>
            <TouchableOpacity onPress={() => navigation?.goBack()}>
                <Image style={styles.icon} source={CloseIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;


const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: "absolute",
        paddingVertical: 6,
        paddingHorizontal: 16,
        width: '100%',
        justifyContent: "center",
        alignItems: "flex-end",
    },
    icon: {
        width: 48,
        height: 48,
    }
});