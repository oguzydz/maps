import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types'

const LeftArrowIcon = require('../assets/img/left-arrow.png')
const RightArrowIcon = require('../assets/img/right-arrow.png')

const Footer = ({ region, prevRegion, nextRegion, setRegion }) => {
    const insets = useSafeAreaInsets();

    const handleRegionPress = (region) => {
        setRegion(region);
    }

    return (
        <View style={[styles.container, { paddingBottom: insets?.bottom + 12 }]}>
            {prevRegion &&
                <TouchableOpacity onPress={() => handleRegionPress(prevRegion)}>
                    <Image source={LeftArrowIcon} style={styles.arrow} />
                </TouchableOpacity>
            }
            <Text style={styles.text}>
                {region?.name}
            </Text>
            {nextRegion &&
                <TouchableOpacity onPress={() => handleRegionPress(nextRegion)}>
                    <Image source={RightArrowIcon} style={styles.arrow} />
                </TouchableOpacity>
            }
        </View>
    );
};

export default Footer;


Footer.propTypes = {
    region: PropTypes.object.isRequired,
    prevRegion: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
    nextRegion: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
    setRegion: PropTypes.func.isRequired
}

Footer.defaultProps = {
    region: {},
    prevRegion: null,
    nextRegion: null,
    setRegion: () => { },
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: "absolute",
        paddingTop: 12,
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
        color: "#000",
    }
});