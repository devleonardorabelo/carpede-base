import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { Theme } from '../global';

export const Header = ({ action, icon, ocult }) => (
  <View style={styles.header}>
    {!ocult && (
      <TouchableOpacity onPress={action}>
        <MI name={icon} size={32} color={Theme.color1} />
      </TouchableOpacity>
    )}
  </View>
);
