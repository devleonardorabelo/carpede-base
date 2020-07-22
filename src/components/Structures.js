/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Modal, View, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { Theme } from '../global';

export const Map = ({ initialRegion, coordinate, onDragEnd, noTips }) => (
  <MapView
    customMapStyle={Theme.mapStyle}
    style={{ flex: 1 }}
    initialRegion={initialRegion}
    minZoomLevel={15}
  >
    <Marker coordinate={coordinate} onDragEnd={onDragEnd} draggable>
      <View style={{ alignItems: 'center' }}>
        {!noTips && (
          <Text
            style={[
              styles.bold,
              {
                backgroundColor: Theme.background3,
                padding: 4,
                borderRadius: 4,
                color: '#FFFFFF',
              },
            ]}
          >
            Segure e arraste
          </Text>
        )}
        <MI name="map-marker" size={64} color={Theme.background3} />
      </View>
    </Marker>
  </MapView>
);
export const ModalView = ({ children, show, image, style, closeAction }) => (
  <Modal
    animationType="fade"
    transparent
    visible={show}
    onRequestClose={closeAction}
  >
    <View style={styles.backgroundModal}>
      {image && (
        <Image source={image} style={styles.imageModal} resizeMode="contain" />
      )}
      <View style={[styles.modal, image && { paddingTop: 50 }, style]}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={closeAction}>
            <MI name="close" size={28} color={Theme.color2} />
          </TouchableOpacity>
        </View>

        {children}
      </View>
    </View>
  </Modal>
);
