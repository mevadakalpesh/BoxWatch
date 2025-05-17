import {View, Image, TextInput, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamilies, color} from '@constants';

const FormInput = ({placeholder = 'Search Jobs', lableName = 'Trip Name'}) => {
  return (
    <View>
      <Text style={styles.lable}>{lableName}</Text>
      <View style={styles.searchBox}>
        <TextInput placeholder={placeholder} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    borderWidth: 1,
    borderColor: '#f4f4f5',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: wp('1.3%'),
    marginBottom: hp('3%'),
  },
  input: {
    flex: 1,
    marginHorizontal: wp('2%'),
    fontSize: 18,
    fontFamily: fontFamilies.Regular,
    backgroundColor: '#f4f4f5',
  },
  lable: {
    fontFamily: fontFamilies.Bold,
    fontSize:15,
    color:"#595959",
    paddingBottom:5,
  },
});

export default FormInput;
