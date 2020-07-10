/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import { treatPrice, minimizeText } from '../utils/treatStrings';
import { LoadingSlide, LoadingList } from './Effects';

import styles, { Theme } from '../global';

export const SlideItem = ({ data, type, large, style }) => {
  const { navigate } = useNavigation();
  return (
    <>
      {type === 'category' && (
        <TouchableOpacity
          style={[styles.slideItem, style]}
          onPress={() =>
            navigate('Products', {
              id: data._id,
              image: data.image,
              name: data.name,
              price: data.price,
            })
          }
        >
          {data.image && (
            <Image
              style={styles.slideItemImage}
              source={{ uri: data.image }}
              resizeMode="cover"
            />
          )}
          <Text style={styles.semiBold}>{data.name}</Text>
        </TouchableOpacity>
      )}
      {type === 'product' && (
        <TouchableOpacity
          style={styles.slideItem}
          onPress={() =>
            navigate('Show', {
              id: data._id,
              image: data.image,
              name: data.name,
              description: data.description,
              price: data.price,
            })
          }
        >
          {data.image && (
            <Image
              style={[
                large ? styles.slideLargeItemImage : styles.slideItemImage,
                style,
              ]}
              source={{ uri: data.image }}
              resizeMode="cover"
            />
          )}
          <Text style={styles.semiBold}>{data.name}</Text>
          {data.price && (
            <Text style={styles.medium}>{treatPrice(data.price)}</Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};
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
          <SlideItem data={item} type={type} large={large} />
        )}
        ListFooterComponent={<View style={{ width: 16 }} />}
        horizontal
      />
    ) : (
      <LoadingSlide type={type} large={large} />
    )}
  </View>
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
export const ListItems = ({ data, onEndReached }) => {
  const { navigate } = useNavigation();
  return (
    <>
      {data.length > 0 ? (
        <FlatList
          style={styles.listItems}
          data={data}
          keyExtractor={(itens) => String(itens._id)}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.3}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              title={item.name}
              description={item.description}
              price={item.price}
              action={() =>
                navigate('Show', {
                  id: item._id,
                  image: item.image,
                  name: item.name,
                  description: item.description,
                  price: item.price,
                })
              }
            />
          )}
        />
      ) : (
        <LoadingList />
      )}
    </>
  );
};
export const OrderItem = ({ data }) => (
  <View style={[styles.orderItem]}>
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={[styles.thumbnailItem, { marginRight: 16 }]}
        source={{ uri: data.product.image }}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.medium}>
          {`${data.quantity}x ${data.product.name}`}
        </Text>
        <Text style={styles.light}>
          {treatPrice(data.product.price * data.quantity)}
        </Text>
        {data.notice !== '' && <Text style={styles.light}>{data.notice}</Text>}
      </View>
      <View
        style={{
          flexGrow: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <MI
          style={{ marginLeft: 8 }}
          name="pencil"
          size={20}
          color={Theme.background3}
        />
      </View>
    </View>
  </View>
);
export const ListOrderItems = ({ data }) => {
  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={data}
      keyExtractor={(itens) =>
        String(`${itens.product._id}/${(Math.random() * 10000).toFixed()}`)
      }
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <OrderItem data={item} />}
    />
  );
};
