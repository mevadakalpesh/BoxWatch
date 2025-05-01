import React, {useRef, useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BackNavigation from '@components/BackNavigation';
import {fontFamilies, color} from '@constants';

const OTPVerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(15);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    const newCode = [...code];

    // If user pastes a full code
    if (text.length > 1) {
      const digits = text.split('').slice(0, 4); // Adjust to match OTP length
      digits.forEach((digit, i) => {
        newCode[i] = digit;
        if (inputRefs.current[i]) {
          inputRefs.current[i].setNativeProps({text: digit});
        }
      });
      3;
      setCode(newCode);
      return;
    }

    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = index => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
    }
  };

  const resendCode = () => {
    if (timer === 0) {
      setTimer(30);
      console.log('Resending code...');
    }
  };

  const verifyCode = () => {
    const enteredCode = code.join('');
    console.log('Entered OTP:', enteredCode);
    // Proceed with backend verification
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <BackNavigation labelText={'Verification'} textColor={color.primary} />

      <View style={styles.mainWrapper}>
        <Text style={styles.subtitle}>
          Code has been sent to (+44) 20 **** *678
        </Text>

        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.inputBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  if (code[index] === '') {
                    handleBackspace(index);
                  } else {
                    const newCode = [...code];
                    newCode[index] = '';
                    setCode(newCode);
                  }
                }
              }}
            />
          ))}
        </View>

        <Text style={styles.errorMessage}>Code Invalid</Text>

        <View style={styles.bottomPart}>
          <Text style={styles.timerLabel}>Didn't receive code?</Text>

          <View style={styles.timerRow}>
            <Image
              source={require('@assets/icons/clock-circle.png')}
              style={styles.clockCircle}
              resizeMode="cover"
            />
            <Text style={styles.timerText}>
              {' '}
              00 : {timer < 10 ? `0${timer}` : timer}
            </Text>
          </View>

          <Pressable disabled={timer > 0} onPress={resendCode}>
            <Text style={[styles.resendText, timer > 0 && {color: '#ccc'}]}>
              Resend Code
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('6%'),
  },
  mainWrapper: {
    // backgroundColor:'red',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    padding: wp('1.5%'),
    elevation: 2,
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#FF3D3D',
    marginBottom: hp('1%'),
  },
  subtitle: {
    fontSize: wp('4.5%'),
    fontFamily: fontFamilies.Regular,
    color: '#0D1217',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
    marginTop: hp('1%'),
  },
  errorMessage: {
    color: '#FF6347',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fontFamilies.Regular,
    display: 'none',
  },
  bottomPart: {
    alignItems: 'center',
    marginTop: hp('3%'),
    gap: hp('2.5%'),
  },
  inputBox: {
    width: wp('18.3%'),
    height: wp('18.3%'),
    borderRadius: wp('2%'),
    borderColor: '#BABDC1',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: wp('10%'),
    fontFamily: fontFamilies.SemiBold,
    marginHorizontal: wp('1%'),
    color: '#000',
    fontWeight: '600',
    backgroundColor: '#F7F7F7',
  },
  timerLabel: {
    fontSize: 16,
    color: '#0D1217',
    fontFamily: fontFamilies.Regular,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  clockCircle: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  timerText: {
    fontSize: 16,
    color: '#0D1217',
    fontFamily: fontFamilies.SemiBold,
  },
  resendText: {
    marginTop: hp('1%'),
    fontSize: 16,
    color: '#BABDC1',
    fontWeight: '600',
  },
  verifyButton: {
    backgroundColor: '#FF3D3D',
    width: '100%',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    marginTop: hp('4%'),
    alignItems: 'center',
  },
  verifyText: {
    color: '#fff',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: hp('2%'),
    fontSize: hp('2%'),
    color: '#444',
  },
  signInLink: {
    color: '#FF3D3D',
    fontWeight: 'bold',
  },
});

export default OTPVerificationScreen;
