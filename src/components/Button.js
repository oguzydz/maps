import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button = ({ region }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Map", { region: region })}>
            <Text style={styles.text}>{region?.name}</Text>
        </TouchableOpacity>
    );
};

export default Button;

Button.propTypes = {
    region: PropTypes.object.isRequired,
}

Button.defaultProps = {
    region: {}
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333"
    }
});