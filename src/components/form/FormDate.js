import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamilies, color} from '@constants';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const FormDate = ({
  placeholder = 'Search Jobs',
  lableName = 'Trip Name',
}) => {
  const [dateObj, setDateObj] = useState(new Date());

  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  );

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = selectedDate => {
    const formatted = selectedDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    setDate(formatted);
    setDateObj(selectedDate);
    hideDatePicker();
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={dateObj}
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.lable}>{lableName}</Text>

      <TouchableOpacity style={styles.searchBox} onPress={showDatePicker}>
        <TextInput
          value={date}
          editable={false}
          placeholder={placeholder}
          style={styles.input}
          pointerEvents="none"
        />
        <Image
          source={require('@assets/icons/date.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
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
    fontSize: 15,
    color: '#595959',
    paddingBottom: 5,
  },
  searchIcon: {
    width: wp('6%'),
    height: wp('6%'),
    marginRight: wp('2.5%'),
  },
});

export default FormDate;
