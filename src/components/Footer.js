import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types'


const LeftArrowIcon = require('../assets/img/left-arrow.png')
const RightArrowIcon = require('../assets/img/right-arrow.png')

const Footer = ({ region }) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { paddingBottom: insets?.bottom }]}>
            <TouchableOpacity>
                <Image source={LeftArrowIcon} style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.text}>
                {region?.name}
            </Text>
            <TouchableOpacity>
                <Image source={RightArrowIcon} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;


Footer.propTypes = {
    region: PropTypes.object.isRequired,
}

Footer.defaultProps = {
    region: {}
};



const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: "absolute",
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        flexDirection: "row",
    },
    arrow: {
        width: 32,
        height: 32,
    },
    text: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
});