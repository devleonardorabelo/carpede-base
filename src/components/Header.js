import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Header = ({
  actionLeft,
  iconLeft,
  actionRight,
  iconRight,
  ocult,
  float,
}) => (
  <View style={[styles.header, float && styles.floatHeader]}>
    {!ocult && (
      <>
        <TouchableOpacity onPress={actionLeft}>
          <MI name={iconLeft} size={28} color={Theme.color1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={actionRight}>
          <MI name={iconRight} size={28} color={Theme.color1} />
        </TouchableOpacity>
      </>
    )}
  </View>
);
