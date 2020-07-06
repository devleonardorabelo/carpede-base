import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Map = ({ initialRegion, coordinate, onDragEnd }) => (
  <MapView
    customMapStyle={Theme.mapStyle}
    style={{ flex: 1 }}
    initialRegion={initialRegion}
    minZoomLevel={15}
  >
    <Marker coordinate={coordinate} onDragEnd={onDragEnd} draggable>
      <MI name="map-marker" size={72} color={Theme.background3} />
    </Marker>
  </MapView>
);
export const Modal = ({ children, show, image }) =>
  show && (
    <SafeAreaView style={styles.backgroundModal}>
      {image && (
        <Image source={image} style={styles.imageModal} resizeMode="contain" />
      )}
      <View style={[styles.modal, image && { paddingTop: 50 }]}>
        {children}
      </View>
    </SafeAreaView>
  );
