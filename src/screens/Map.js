import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { decode } from "@googlemaps/polyline-codec";
import MapView, { PROVIDER_GOOGLE, Polygon, Marker, Polyline } from 'react-native-maps';

import Header from '../components/Header';

import mobileCaseData from "../assets/json/mobileCaseData";

const HomeMarkerIcon = require('../assets/img/home-marker.png')
const CourierMarkerIcon = require('../assets/img/courier-marker.png')

const Map = ({ route: navigationRoute }) => {
    const { region } = navigationRoute.params || {};
    const route = mobileCaseData.routes?.filter(item => item?.regionId === region?._id)[0] || {};

    return (
        <View style={styles.container}>
            <Header />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    longitude: region?.center?.coordinates[0],
                    latitude: region?.center?.coordinates[1],
                    latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421
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

                <Marker coordinate={{ longitude: decode(route?.encodedPolyline)[0][1], latitude: decode(route?.encodedPolyline)[0][0] }} >
                    <Image
                        style={styles.homeMarker}
                        source={CourierMarkerIcon}
                        resizeMode="contain"
                    />
                </Marker>

                <Polyline
                    coordinates={decode(route?.encodedPolyline)?.map(coordinates => ({ latitude: coordinates[0], longitude: coordinates[1] }))}
                    fillColor="rgba(0,0,0,1)"
                    strokeWidth={3}
                />
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