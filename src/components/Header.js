import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Header = ({ actionLeft, icon, ocult, float }) => (
  <View style={[styles.header, float && styles.floatHeader]}>
    {!ocult && (
      <TouchableOpacity onPress={actionLeft}>
        <MI name={icon} size={32} color={Theme.color1} />
      </TouchableOpacity>
    )}
  </View>
);
