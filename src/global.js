import { StyleSheet, StatusBar } from 'react-native';

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
  mapStyle: [],
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
  mapStyle: [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#141414',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181818',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1b1b1b',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#2c2c2c',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8a8a8a',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#373737',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3c3c3c',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3d3d3d',
        },
      ],
    },
  ],
};

export const Theme = DarkTheme;

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
    color: Theme.color2,
  },
  semiBold: {
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    color: Theme.color2,
  },
  medium: {
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: Theme.color2,
  },
  light: {
    fontFamily: 'Montserrat Light',
    fontSize: 16,
    color: Theme.color2,
  },
  alignCenter: {
    textAlign: 'center',
  },

  // STRUCTURE
  header: {
    paddingVertical: 16,
    minHeight: 64,
    paddingTop: StatusBar.currentHeight,
  },
  floatHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    zIndex: 999,
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
    marginBottom: 32,
  },
  scrollVertical: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: Theme.background1,
    padding: 16,
  },
  backgroundModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imageModal: {
    height: 120,
    alignSelf: 'center',
    marginBottom: -40,
    zIndex: 9999,
  },
  modal: {
    backgroundColor: Theme.background1,
    borderRadius: 24,
    minHeight: 100,
    minWidth: 100,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  // INPUTS
  groupInput: {
    marginBottom: 16,
  },
  labelInput: {
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    marginBottom: 8,
    color: Theme.color3,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: Theme.color1,
    backgroundColor: Theme.background2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
  },
  circularButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    width: 72,
    borderRadius: 100,
    marginVertical: 16,
  },
});
