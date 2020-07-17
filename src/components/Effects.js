import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles, { Theme } from '../global';

export const LoadingSlide = ({ large }) => (
  <SkeletonPlaceholder
    backgroundColor={Theme.background2}
    highlightColor={Theme.background1}
    speed={1000}
  >
    <View style={[styles.slideHorizontal, { paddingLeft: 16 }]}>
      <View style={[styles.ghostText, { width: 140, height: 24 }]} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.slideItem}>
          <View
            style={large ? styles.slideLargeItemImage : styles.slideItemImage}
          />
          <View style={[styles.ghostText, { width: 120 }]} />
        </View>
        <View style={styles.slideItem}>
          <View
            style={large ? styles.slideLargeItemImage : styles.slideItemImage}
          />
          <View style={[styles.ghostText, { width: 120 }]} />
        </View>
        <View style={styles.slideItem}>
          <View
            style={large ? styles.slideLargeItemImage : styles.slideItemImage}
          />
          <View style={[styles.ghostText, { width: 120 }]} />
        </View>
      </View>
    </View>
  </SkeletonPlaceholder>
);
export const LoadingListItem = () => (
  <SkeletonPlaceholder
    backgroundColor={Theme.background2}
    highlightColor={Theme.background1}
    speed={1000}
  >
    <View style={styles.item}>
      <View style={[styles.infoItem, { flexGrow: 1 }]}>
        <View style={[styles.ghostText, { width: 100 }]} />
        <View
          style={[styles.ghostText, { marginTop: 8, height: 50, width: '80%' }]}
        />
        <View style={[styles.ghostText, { marginTop: 8, width: 60 }]} />
      </View>
    </View>
  </SkeletonPlaceholder>
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
