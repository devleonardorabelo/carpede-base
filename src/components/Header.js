import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Header = ({ actionLeft, iconLeft, ocult, float }) => (
  <View style={[styles.header, float && styles.floatHeader]}>
    {!ocult && (
      <TouchableOpacity onPress={actionLeft}>
        <MI name={iconLeft} size={32} color={Theme.color1} />
      </TouchableOpacity>
    )}
  </View>
);
