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
  focus,
  centralized,
}) => (
  <View style={[styles.groupInput, style]}>
    <Text style={styles.labelInput}>{label}</Text>
    <TextInput
      style={[styles.input, centralized && { textAlign: 'center' }]}
      placeholder={placeholder}
      onChangeText={action}
      keyboardType={keyboardType || 'default'}
      maxLength={maxLength || 50}
      defaultValue={defaultValue}
      autoFocus={focus || false}
    />
  </View>
);
export const TextArea = ({
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
      numberOfLines={10}
      style={styles.textArea}
      placeholder={placeholder}
      onChangeText={action}
      keyboardType={keyboardType || 'default'}
      maxLength={maxLength || 100}
      defaultValue={defaultValue}
      multiline
      returnKeyType="done"
      blurOnSubmit
    />
  </View>
);
export const SearchInput = ({ placeholder, onChangeText, action }) => (
  <View style={styles.searchBox}>
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={action}
    />
    <TouchableOpacity style={styles.searchButton} onPress={action}>
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
  }, [status, title]);
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
export const LinkButton = ({ action, title, icon }) => (
  <TouchableOpacity style={styles.linkButton} onPress={action}>
    <MI style={{ marginRight: 8 }} name={icon} size={28} color={Theme.color2} />
    <Text style={styles.medium}>{title}</Text>
  </TouchableOpacity>
);
export const OutlineButton = ({ active, action, icon, title, style }) => (
  <TouchableOpacity
    style={[
      styles.outlineButton,
      style,
      active
        ? { borderColor: Theme.background4 }
        : { borderColor: Theme.color3 },
    ]}
    onPress={action}
  >
    <MI
      name={icon}
      size={28}
      color={active ? Theme.background4 : Theme.color3}
    />
    <Text
      style={[
        styles.semiBold,
        { marginLeft: 16 },
        active ? { color: Theme.background4 } : { color: Theme.color3 },
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
export const QuantityButton = ({ actionLeft, actionRight, quantity }) => (
  <View style={styles.quantityButtonGroup}>
    <TouchableOpacity style={styles.quantityButton} onPress={actionLeft}>
      <MI name="minus" size={28} color={Theme.color3} />
    </TouchableOpacity>
    <Text style={styles.quantityInput}>{quantity}</Text>
    <TouchableOpacity style={styles.quantityButton} onPress={actionRight}>
      <MI name="plus" size={28} color={Theme.color3} />
    </TouchableOpacity>
  </View>
);
