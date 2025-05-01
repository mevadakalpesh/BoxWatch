import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamilies, color} from '@constants';
import BackArrowIcon from '@assets/icons/back-arrow.png';

const BackNavigation = ({ labelText = "next", textColor = '#0D1217' }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        // onPress={() => navigation.goBack()}
        >
        <Image
          source={BackArrowIcon}
          style={styles.backImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={[styles.title,{color : textColor}]}>{labelText}</Text>
      </View>
    </View>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  backButton: {
    height: 40,
    width: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    shadowColor: '#0D0A2C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  backImage: {
    position: 'relative',
    width: wp('5%'),
    height: wp('5%'),
  },
  titleWrapper: {
    flex: 1,
    // backgroundColor:"green",
    // justifyContent:"flex-start",
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: fontFamilies.SemiBold,
    marginRight: wp('6%'),
  },
});
