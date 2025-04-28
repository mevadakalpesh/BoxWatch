import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {fontFamilies, color} from '@constants';

const PrimaryButton = ({onPress = () => {}, label = 'Next'}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    paddingVertical: hp('2%'),
    borderRadius: 28,
    marginBottom: hp('3%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600',
    fontFamily: fontFamilies.SemiBold,
  },
});
