import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {fontFamilies, color} from '@constants';
import BackNavigation from '@components/BackNavigation';
import PrimaryButton from '@components/PrimaryButton';

const LANGUAGES = ['English', 'Hindi', 'Gujarati', 'Tamil'];

export default function SelectLanguageScreen({navigation}) {
  const [selected, setSelected] = useState('English');

  return (
    <SafeAreaView style={styles.container}>
      
      <BackNavigation labelText={"Select Language"} />

      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}>
        {LANGUAGES.map(lang => (
          <TouchableOpacity
            key={lang}
            style={[
              styles.languageItem,
              selected === lang && styles.languageItemSelected,
            ]}
            onPress={() => setSelected(lang)}
            activeOpacity={0.7}>
            <Text style={styles.languageText}>{lang}</Text>
            <View
              style={[
                styles.radioOuter,
                selected === lang && styles.radioOuterActive,
              ]}>
              {selected === lang && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <PrimaryButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('6%'),
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingVertical: hp('2%'),
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingVertical: hp('3.5%'),
    paddingHorizontal: hp('3.5%'),
    marginBottom: hp('2%'),
  },
  languageItemSelected: {
    borderColor: color.primary,
  },
  languageText: {
    fontSize: wp('4.4%'),
    fontFamily: fontFamilies.SemiBold,
  },
  radioOuter: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterActive: {
    borderColor: color.primary,
  },
  radioInner: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    backgroundColor: color.primary,
  },
});
