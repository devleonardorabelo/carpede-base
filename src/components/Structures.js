/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import { treatPrice, minimizeText } from '../utils/treatStrings';

import styles, { Theme } from '../global';

export const Map = ({ initialRegion, coordinate, onDragEnd }) => (
  <MapView
    customMapStyle={Theme.mapStyle}
    style={{ flex: 1 }}
    initialRegion={initialRegion}
    minZoomLevel={15}
  >
    <Marker coordinate={coordinate} onDragEnd={onDragEnd} draggable>
      <View style={{ alignItems: 'center' }}>
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
        <MI name="map-marker" size={72} color={Theme.background3} />
      </View>
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
export const SlideHorizontal = ({ data, large, title }) => (
  <View style={styles.slideHorizontal}>
    <Text style={styles.boldSubtitle}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => String(item._id)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <SlideItem
          image={item.image}
          title={item.name}
          large={large}
          price={item.price}
        />
      )}
      horizontal
    />
  </View>
);
export const SlideItem = ({ action, image, title, large, price }) => (
  <TouchableOpacity style={styles.slideItem} onPress={action}>
    {image && (
      <Image
        style={large ? styles.slideLargeItemImage : styles.slideItemImage}
        source={{ uri: image }}
        resizeMode="cover"
      />
    )}
    <Text style={styles.semiBold}>{title}</Text>
    {price && <Text style={styles.medium}>{treatPrice(price)}</Text>}
  </TouchableOpacity>
);
export const ListItems = ({ data, style }) => (
  <Animated.View style={[style, { flex: 1 }]}>
    <FlatList
      style={styles.listItems}
      data={data}
      keyExtractor={(itens) => String(itens._id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Item
          image={item.image}
          title={item.name}
          description={item.description}
          price={item.price}
        />
      )}
    />
  </Animated.View>
);
export const Item = ({ action, image, title, description, price }) => (
  <TouchableOpacity style={styles.item} onPress={action}>
    <View style={styles.infoItem}>
      <Text style={styles.bold}>{title}</Text>
      <Text style={styles.light}>{minimizeText(description)}</Text>
      <Text style={[styles.medium, { marginTop: 8 }]}>{treatPrice(price)}</Text>
    </View>
    {image && (
      <Image
        style={styles.imageItem}
        source={{ uri: image }}
        resizeMode="contain"
      />
    )}
  </TouchableOpacity>
);
