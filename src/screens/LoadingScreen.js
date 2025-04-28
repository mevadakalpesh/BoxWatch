import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Image,
  useWindowDimensions,
} from 'react-native';
import {color, fontFamilies} from '@constants';
import BoxImage from '@assets/images/box.png';
import LadingArrow from '@assets/images/loading-arrow.png';

const LoadingScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.title, {fontSize: Math.min(width * 0.1, 40)}]}>
          SPEEDY PACK
        </Text>
        <Image
          style={[styles.arrowImage, {right: width * 0.1 - 20}]}
          source={LadingArrow}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentWrapper}>
        <Image
          style={[
            styles.boxImage,
            {height: height * 0.3, right: width * 0.3 - 20},
          ]}
          source={BoxImage}
          resizeMode="contain"
        />

        <Text style={[styles.subtitle, {paddingHorizontal: width * 0.1 - 20}]}>
          Fast, Secure & Affordable Courier Service
        </Text>

        <View style={{paddingHorizontal: width * 0.1}}>
          <Animated.View style={[styles.progressBar]} />
        </View>

        <Text style={styles.version}>Version 2.1.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  titleWrapper: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: color.white,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: fontFamilies.SemiBold,
  },
  arrowImage: {
    position: 'absolute',
    width: '100%',
  },
  contentWrapper: {
    flex: 0.5,
    alignContent: 'center',
  },
  boxImage: {
    width: '100%',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 33,
    fontSize: 22,
    color: color.white,
    paddingBottom: 5,
    fontFamily: fontFamilies.SemiBold,
  },

  progressBar: {
    height: 5,
    backgroundColor: '#E85A41',
    borderRadius: 8,
  },
  version: {
    color: color.white,
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: fontFamilies.SemiBold,
  },
});
