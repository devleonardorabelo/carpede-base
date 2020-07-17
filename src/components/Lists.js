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
              onSale: data.onSale,
              onSaleValue: data.onSaleValue,
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
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={[
                  data.onSale ? styles.bold : styles.medium,
                  { marginRight: 8 },
                ]}
              >
                {treatPrice(data.onSale ? data.onSaleValue : data.price)}
              </Text>
              <Text
                style={[
                  styles.medium,
                  data.onSale && {
                    textDecorationLine: 'line-through',
                    color: Theme.color3,
                  },
                ]}
              >
                {data.onSale && treatPrice(data.price)}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};
export const SlideHorizontal = ({ data, large, name, type, style }) =>
  data.length > 0 ? (
    <View style={[styles.slideHorizontal, style]}>
      <Text style={[styles.boldSubtitle, { paddingLeft: 16 }]}>{name}</Text>
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
    </View>
  ) : null;
export const Item = ({ data, action }) => (
  <TouchableOpacity style={styles.item} onPress={action}>
    <View style={styles.infoItem}>
      <Text style={styles.bold}>{data.name}</Text>
      <Text style={styles.light}>{minimizeText(data.description)}</Text>
      <View style={{ flexDirection: 'row', paddingTop: 8 }}>
        {data.onSale && (
          <Text style={styles.bold}>{treatPrice(data.onSaleValue)}</Text>
        )}
        <Text
          style={[
            styles.medium,
            data.onSale && {
              textDecorationLine: 'line-through',
              marginLeft: 8,
            },
          ]}
        >
          {treatPrice(data.price)}
        </Text>
      </View>
    </View>
    {data.image && (
      <Image
        style={styles.imageItem}
        source={{ uri: data.image }}
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
              data={item}
              action={() =>
                navigate('Show', {
                  id: item._id,
                  image: item.image,
                  name: item.name,
                  description: item.description,
                  price: item.price,
                  onSale: item.onSale,
                  onSaleValue: item.onSaleValue,
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
export const OrderItem = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.orderItem]}
      onPress={() =>
        navigate('Show', {
          id: data.product._id,
          idSelect: data.product.idSelect,
          image: data.product.image,
          name: data.product.name,
          description: data.product.description,
          price: data.product.price,
          onSale: data.product.onSale,
          onSaleValue: data.product.onSaleValue,
          notice: data.notice,
          quantity: data.quantity,
        })
      }
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={[styles.thumbnailItem, { marginRight: 16 }]}
          source={{ uri: data.product.image }}
          resizeMode="cover"
        />
        <View style={{ flexGrow: 1 }}>
          <Text style={styles.medium}>
            {`${data.quantity}x ${data.product.name}`}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {data.product.onSale && (
              <Text style={styles.medium}>
                {treatPrice(data.product.onSaleValue * data.quantity)}
              </Text>
            )}
            <Text
              style={[
                styles.light,
                data.product.onSale && {
                  textDecorationLine: 'line-through',
                  marginLeft: 8,
                },
              ]}
            >
              {treatPrice(data.product.price * data.quantity)}
            </Text>
          </View>
          {data.notice !== '' && (
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.light, { flexWrap: 'wrap', flex: 1 }]}>
                {data.notice}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
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
    </TouchableOpacity>
  );
};
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
