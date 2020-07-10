import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

import styles, { Theme } from '../global';

export const Skeleton = ({ children }) => {
  const fade = useRef(new Animated.Value(0)).current;

  const animateBack = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fade, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animateBack();
  }, []);

  return (
    <View>
      <Animated.View style={{ opacity: fade }}>{children}</Animated.View>
    </View>
  );
};
export const LoadingSlideItem = ({ large, type }) => (
  <View style={styles.slideItem}>
    <View
      style={[
        large ? styles.slideLargeItemImage : styles.slideItemImage,
        { backgroundColor: Theme.background2 },
      ]}
    />
    <View style={[styles.ghostText, { width: 120 }]} />
    {type === 'product' && (
      <View style={[styles.ghostText, { marginTop: 8, width: 60 }]} />
    )}
  </View>
);
export const LoadingSlide = ({ large, type }) => (
  <Skeleton>
    <View
      style={[
        styles.slideHorizontal,
        { flexDirection: 'row', paddingLeft: 16 },
      ]}
    >
      <LoadingSlideItem large={large} type={type} />
      <LoadingSlideItem large={large} type={type} />
      <LoadingSlideItem large={large} type={type} />
    </View>
  </Skeleton>
);
export const LoadingListItem = () => (
  <Skeleton>
    <View style={styles.item}>
      <View style={[styles.infoItem, { flexGrow: 1 }]}>
        <View style={[styles.ghostText, { width: 100 }]} />
        <View
          style={[styles.ghostText, { marginTop: 8, height: 50, width: '80%' }]}
        />
        <View style={[styles.ghostText, { marginTop: 8, width: 60 }]} />
      </View>
    </View>
  </Skeleton>
);
export const LoadingList = () => (
  <View style={styles.listItems}>
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
    <LoadingListItem />
  </View>
);
