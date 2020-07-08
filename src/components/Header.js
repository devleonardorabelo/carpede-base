import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Header = ({
  actionLeft,
  iconLeft,
  actionRight,
  iconRight,
  ocult,
  float,
  title,
}) => (
  <View style={[styles.header, float && styles.floatHeader]}>
    {!ocult && (
      <>
        <TouchableOpacity onPress={actionLeft}>
          <MI name={iconLeft} size={28} color={Theme.color1} />
        </TouchableOpacity>
        <Text style={styles.boldSubtitle}>{title}</Text>
        {iconRight ? (
          <TouchableOpacity onPress={actionRight}>
            <MI name={iconRight} size={28} color={Theme.color1} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 28 }} />
        )}
      </>
    )}
  </View>
);
