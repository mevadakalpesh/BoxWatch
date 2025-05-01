import React, {useCallback} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {fontFamilies, color} from '@constants';

const PrimaryButton = ({onPress = () => {}, label = 'Next'}) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && {opacity: 0.8}]}
      onPress={handlePress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default React.memo(PrimaryButton);

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
