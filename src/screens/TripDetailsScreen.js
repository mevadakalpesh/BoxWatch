import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
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
import FormInput from '@components/form/FormInput';
import FormDate from '@components/form/FormDate';
import FormTime from '@components/form/FormTime';

export default function TripDetailsScreen({navigation}) {
  const [tripName, setTripName] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [tripTime, setTripTime] = useState('');

  const isFormValid = tripName.trim() && tripDate && tripTime;

  const gotoNext = () => {
    if (isFormValid) {
      // You can pass form data via navigation if needed
      navigation.replace('OnboardingScreen');
    } else {
      // Optionally show feedback if form incomplete
      alert('Please fill all the fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackNavigation labelText={'Trip Details'} backScreen={gotoNext} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <ScrollView
            contentContainerStyle={styles.inputContainer}
            keyboardShouldPersistTaps="handled"
          >
            <FormInput
              placeholder="Amd to Rajkot for meet .."
              labelName="Trip Name"
              value={tripName}
              onChangeText={setTripName}
              autoCorrect={false}
              autoCapitalize="sentences"
            />

            <FormDate
              placeholder="DD/MM/YYYY"
              labelName="Trip Start Date"
              value={tripDate}
              onChange={setTripDate}
            />

            <FormTime
              placeholder="HH:MM"
              labelName="Trip Start Time"
              value={tripTime}
              onChange={setTripTime}
            />
          </ScrollView>

          <View style={styles.button}>
            <PrimaryButton onPress={gotoNext} disabled={!isFormValid} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('6%'),
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingBottom: hp('2%'),
  },
  button: {
    position: 'relative',
  },
});
