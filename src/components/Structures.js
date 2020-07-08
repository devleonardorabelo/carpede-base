/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { treatPrice, minimizeText } from '../utils/treatStrings';

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
export const ModalView = ({ children, show, image, style }) => (
  <Modal animationType="fade" transparent visible={show}>
    <View style={styles.backgroundModal}>
      {image && (
        <Image source={image} style={styles.imageModal} resizeMode="contain" />
      )}
      <View style={[styles.modal, image && { paddingTop: 50 }, style]}>
        {children}
      </View>
    </View>
  </Modal>
);
export const SlideHorizontal = ({ data, large, name, type }) => (
  <View style={styles.slideHorizontal}>
    <Text style={[styles.boldSubtitle, { paddingLeft: 16 }]}>{name}</Text>
    {data.length > 0 ? (
      <FlatList
        style={{ paddingLeft: 16 }}
        data={data}
        keyExtractor={(item) => String(item._id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SlideItem
            id={item._id}
            image={item.image}
            name={item.name}
            large={large}
            price={item.price}
            type={type}
          />
        )}
        ListFooterComponent={<View style={{ width: 16 }} />}
        horizontal
      />
    ) : (
      <Text>Carregando</Text>
    )}
  </View>
);
export const SlideItem = ({ id, image, name, large, price, type }) => {
  const navigation = useNavigation();
  return (
    <>
      {type === 'category' && (
        <TouchableOpacity
          style={styles.slideItem}
          onPress={() =>
            navigation.navigate('Products', { id, image, name, price })
          }
        >
          {image && (
            <Image
              style={styles.slideItemImage}
              source={{ uri: image }}
              resizeMode="cover"
            />
          )}
          <Text style={styles.semiBold}>{name}</Text>
        </TouchableOpacity>
      )}
      {type === 'product' && (
        <TouchableOpacity
          style={styles.slideItem}
          onPress={() =>
            navigation.navigate('Products', { id, image, name, price })
          }
        >
          {image && (
            <Image
              style={large ? styles.slideLargeItemImage : styles.slideItemImage}
              source={{ uri: image }}
              resizeMode="cover"
            />
          )}
          <Text style={styles.semiBold}>{name}</Text>
          {price && <Text style={styles.medium}>{treatPrice(price)}</Text>}
        </TouchableOpacity>
      )}
    </>
  );
};
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
