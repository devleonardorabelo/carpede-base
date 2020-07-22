import React from 'react';
import { View, Text } from 'react-native';
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
export const LoadingOrderRectangle = () => (
  <SkeletonPlaceholder
    backgroundColor={Theme.background2}
    highlightColor={Theme.background1}
    speed={1000}
  >
    <View style={[styles.box, { height: 54 }]} />
  </SkeletonPlaceholder>
);
export const LoadingListOrderRectangle = () => (
  <View style={{ paddingHorizontal: 16 }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Theme.background1,
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.bold, { width: 60 }]}>Data</Text>
        <Text style={styles.bold}>Situação</Text>
      </View>
      <Text style={[styles.bold, { minWidth: 60, textAlign: 'center' }]}>
        Total
      </Text>
    </View>
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
    <LoadingOrderRectangle />
  </View>
);
