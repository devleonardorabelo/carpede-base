import { StyleSheet } from 'react-native';

// eslint-disable-next-line no-unused-vars
const LightTheme = {
  background1: '#FFFFFF',
  background2: '#F2F2F2',
  background3: '#FF4D00',
  background4: '#FF2E00',
  color1: '#141414',
  color2: '#2E2E2E',
  color3: '#7A7A7A',
  color4: '#E0E0E0',
  mode: 'light',
};

// eslint-disable-next-line no-unused-vars
const DarkTheme = {
  background1: '#141414',
  background2: '#2E2E2E',
  background3: '#FF4D00',
  background4: '#FF2E00',
  color1: '#FFFFFF',
  color2: '#F2F2F2',
  color3: '#E0E0E0',
  color4: '#7A7A7A',
  mode: 'dark',
};

export const Theme = LightTheme;

export default StyleSheet.create({
  // TEXTS
  title: {
    fontFamily: 'Montserrat Bold',
    fontSize: 28,
    color: Theme.color1,
  },
  subtitle: {
    fontFamily: 'Montserrat Medium',
    fontSize: 20,
    color: Theme.color2,
  },
  bold: {
    fontFamily: 'Montserrat Bold',
    fontSize: 16,
  },
  semiBold: {
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
  },
  medium: {
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
  },
  light: {
    fontFamily: 'Montserrat Light',
    fontSize: 16,
  },

  // STRUCTURE
  header: {
    paddingVertical: 16,
    minHeight: 64,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.background1,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 16,
  },

  // INPUTS
  groupInput: {
    marginBottom: 16,
  },
  labelInput: {
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    marginBottom: 8,
    color: Theme.color2,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.color3,
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: Theme.color1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
  },
});
