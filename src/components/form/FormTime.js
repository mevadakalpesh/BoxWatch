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

const FormTime = ({placeholder = 'Select Time', lableName = 'Select Time'}) => {
  const [timeObj, setTimeObj] = useState(new Date());

  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  );

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleConfirm = selectedTime => {
    const formattedTime = selectedTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setTime(formattedTime);
    setTimeObj(selectedTime);
    hideTimePicker();
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        date={timeObj}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        is24Hour={false}
      />

      <Text style={styles.lable}>{lableName}</Text>

      <TouchableOpacity style={styles.searchBox} onPress={showTimePicker}>
        <TextInput
          value={time}
          editable={false}
          placeholder={placeholder}
          style={styles.input}
          pointerEvents="none"
        />
        <Image
          source={require('@assets/icons/clock-circle.png')}
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

export default FormTime;
