import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const color = {
  primary: '#FF6347',
  primaryLight: '#FF826C',
  white: '#FFFFFF',
};

const isIOS = () => {
  return Platform.OS === 'ios';
};

const fontFamilies = {
  Thin: 'Roboto-Thin',
  ExtraLight: 'Roboto-ExtraLight',
  Light: 'Roboto-Light',
  Regular: 'Roboto-Regular',
  Medium: 'Roboto-Medium',
  SemiBold: 'Roboto-SemiBold',
  Bold: 'Roboto-Bold',
  ExtraBold: 'Roboto-ExtraBold',
  Black: 'Roboto-Black',
};

export {color, width, height, isIOS, fontFamilies};
