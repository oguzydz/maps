import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Polygon, Marker } from 'react-native-maps';

import Header from '../components/Header';

const HomeMarkerIcon = require('../assets/img/home-marker.png')


const Map = ({ route }) => {
    const { region } = route.params || {};

    return (
        <View style={styles.container}>
            <Header />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    longitude: region?.center?.coordinates[0],
                    latitude: region?.center?.coordinates[1],
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.07,
                }}
            >
                {region?.polygon?.coordinates?.map((polygon, index) => {
                    return <Polygon
                        key={index.toString()}
                        coordinates={polygon?.map(coordinates => ({ latitude: coordinates[1], longitude: coordinates[0] }))}
                        strokeColor="rgba(0,0,0,0.6)"
                        fillColor="rgba(0,0,0,0.2)"
                        strokeWidth={3}
                    />
                })}
                <Marker coordinate={{ longitude: region?.center?.coordinates[0], latitude: region?.center?.coordinates[1] }} >
                    <Image
                        style={styles.homeMarker}
                        source={HomeMarkerIcon}
                        resizeMode="contain"
                    />
                </Marker>
            </MapView>
        </View>
    )
};

export default Map;


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    homeMarker: {
        width: 40,
        height: 40,
    }
});