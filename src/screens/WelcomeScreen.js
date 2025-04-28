import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from 'react-native';

import BoxMan from '@assets/images/welcome.png';

import {fontFamilies, color} from '@constants';

const WelcomeScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={BoxMan}
        style={[styles.image, {width, height: (height - 150)}]}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>Welcome to</Text>
        <Text style={styles.title}>SPEEDY PACK</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  image: {
    position: 'absolute',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBlock: 50,
  },
  subTitle: {
    color: color.primary,
    fontSize: 22,
    fontFamily: fontFamilies.SemiBold,
  },
  title: {
    color: color.primary,
    fontSize: 40,
    fontFamily: fontFamilies.Black,
  },
});
