import {View, Image, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamilies, color} from '@constants';

const SearchInput = () => {
  return (
    <View style={styles.searchBox}>
      <Image
        source={require('@assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput placeholder="Search Jobs" style={styles.searchInput} />
      <Image
        source={require('@assets/icons/filter.png')}
        style={styles.searchIcon}
      />
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
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1.3%'),
    marginBottom: hp('4%'),
  },
  searchIcon: {
    width: wp('6%'),
    height: wp('6%'),
  },
  searchInput: {
    flex: 1,
    marginHorizontal: wp('2%'),
    fontSize: 18,
    fontFamily: fontFamilies.Regular,
    backgroundColor: '#f4f4f5',
  },
});

export default SearchInput;
