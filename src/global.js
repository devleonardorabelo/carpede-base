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
  boldSubtitle: {
    fontFamily: 'Montserrat SemiBold',
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
  ghostText: {
    backgroundColor: Theme.background2,
    height: 16,
    borderRadius: 4,
    flexGrow: 1,
  },
  alignCenter: {
    textAlign: 'center',
  },

  // STRUCTURE
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomColor: Theme.background2,
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
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  column: {
    flexDirection: 'column',
    marginBottom: 32,
    paddingHorizontal: 16,
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
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 24,
  },
  viewOrder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Theme.background4,
  },
  headerOrder: {
    opacity: 1,
    flexDirection: 'row',
    backgroundColor: Theme.background4,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerBodyOrder: {
    padding: 16,
    backgroundColor: Theme.background1,
  },
  bodyOrder: {
    backgroundColor: Theme.background1,
    height: '100%',
  },
  footerOrder: {
    padding: 16,
  },
  orderItem: {
    paddingVertical: 12,
    borderBottomColor: Theme.background2,
    borderBottomWidth: 1,
  },
  thumbnailItem: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  textArea: {
    textAlignVertical: 'top',
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: Theme.color1,
    backgroundColor: Theme.background2,
  },
  searchBox: {
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Theme.background2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: Theme.color1,
    flexGrow: 1,
  },
  searchButton: {},
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
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.background3,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  linkButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    borderWidth: 3,
    borderColor: Theme.background2,
    height: 48,
    width: 48,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityInput: {
    textAlign: 'center',
    fontFamily: 'Montserrat Medium',
    fontSize: 20,
    width: 50,
    textAlignVertical: 'center',
  },

  // SLIDES
  slideHorizontal: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.background2,
    marginBottom: 16,
  },
  slideItem: {
    alignContent: 'center',
    paddingVertical: 16,
    marginRight: 16,
  },
  slideItemImage: {
    width: 130,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  slideLargeItemImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  listItems: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: Theme.background2,
  },
  infoItem: {
    flexShrink: 1,
  },
  imageItem: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },

  // MORE

  hairline: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.background2,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 20,
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat Bold',
    left: 16,
    top: 14,
    color: Theme.background4,
  },
});
