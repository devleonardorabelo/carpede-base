import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import FE from 'react-native-vector-icons/Feather';

import Gradient from 'react-native-linear-gradient';

import styles, { Theme } from '../global';

export const Input = ({
  label,
  placeholder,
  action,
  keyboardType,
  maxLength,
  defaultValue,
  style,
}) => (
  <View style={[styles.groupInput, style]}>
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
export const SearchInput = ({ placeholder, action }) => (
  <View style={styles.searchBox}>
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      action={action}
    />
    <TouchableOpacity style={styles.searchButton}>
      <FE name="search" size={28} color={Theme.background4} />
    </TouchableOpacity>
  </View>
);
export const Button = ({
  title,
  action,
  status,
  disabledTitle,
  doneTitle,
  style,
}) => {
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
        setContent(<ActivityIndicator size={28} color="#FFFFFF" />);
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
      case 'done':
        setBackgroundColor([Theme.background3, Theme.background4]);
        setContent(
          <Text style={[styles.bold, { color: '#FFFFFF' }]}>{doneTitle}</Text>
        );
        setDisabled(false);
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
        style={[styles.button, style]}
      >
        {content}
      </Gradient>
    </TouchableOpacity>
  );
};
export const CircularButton = ({ action, status, style, icon, center }) => {
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
        setContent(<ActivityIndicator size={28} color="#FFFFFF" />);
        setDisabled(true);
        break;
      case 'disabled':
        setBackgroundColor([Theme.background2, Theme.background2]);
        setContent(<MI name="check" size={28} color="#FFFFFF" />);
        setDisabled(true);
        break;
      default:
        setBackgroundColor([Theme.background3, Theme.background4]);
        setContent(<MI name={icon} size={28} color="#FFFFFF" />);
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
        style={[
          styles.circularButton,
          style,
          center && { alignSelf: 'center' },
        ]}
      >
        {content}
      </Gradient>
    </TouchableOpacity>
  );
};
export const OutlineButton = ({ action, icon, title }) => (
  <TouchableOpacity style={styles.outlineButton} onPress={action}>
    <MI name={icon} size={28} color={Theme.background3} />
    <Text
      style={[styles.semiBold, { marginLeft: 16, color: Theme.background3 }]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
