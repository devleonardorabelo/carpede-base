import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Gradient from 'react-native-linear-gradient';

import styles, { Theme } from '../global';

export const Input = ({
  label,
  placeholder,
  action,
  keyboardType,
  maxLength,
  defaultValue,
}) => (
  <View style={styles.groupInput}>
    <Text style={styles.labelInput}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={action}
      keyboardType={keyboardType || 'default'}
      maxLength={maxLength || 50}
      defaultValue={defaultValue}
    />
  </View>
);
export const Button = ({ title, action, status, disabledTitle }) => {
  const [backgroundColor, setBackgroundColor] = useState([
    Theme.background3,
    Theme.background4,
  ]);
  const [content, setContent] = useState(null);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    switch (status) {
      case 'loading':
        setBackgroundColor([Theme.background4, Theme.background3]);
        setContent(<ActivityIndicator size={32} color="#FFFFFF" />);
        setDisabled(true);
        break;
      case 'disabled':
        setBackgroundColor([Theme.background2, Theme.background2]);
        setContent(
          <Text style={[styles.bold, { color: Theme.color2 }]}>
            {disabledTitle}
          </Text>
        );
        setDisabled(true);
        break;
      default:
        setBackgroundColor([Theme.background3, Theme.background4]);
        setContent(
          <Text style={[styles.bold, { color: '#FFFFFF' }]}>{title}</Text>
        );
        setDisabled(false);
        break;
    }
  }, [status]);
  return (
    <TouchableOpacity onPress={action} disabled={disabled}>
      <Gradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={backgroundColor}
        style={styles.button}
      >
        {content}
      </Gradient>
    </TouchableOpacity>
  );
};
