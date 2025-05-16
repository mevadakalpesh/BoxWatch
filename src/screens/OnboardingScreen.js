import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { fontFamilies, color } from '@constants';
import PrimaryButton from '@components/PrimaryButton';

const slides = [
  {
    id: '1',
    title: 'Make Money on Your Next Trip',
    description: 'Driving to another city? Carry a package & earn extra!',
    image: require('@assets/images/driver-onboarding1.png'),
  },
  {
    id: '2',
    title: 'Use Your Empty Space',
    description: 'Pick packages on your route. Earn effortlessly!',
    image: require('@assets/images/driver-onboarding2.jpg'),
  },
  {
    id: '3',
    title: 'Get Paid for Every Delivery',
    description: 'Get paid instantly. No fees, just extra cash!',
    image: require('@assets/images/driver-onboarding3.png'),
  },
];

const OnboardingScreen = ({navigation}) => {
  const { width, height } = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width); // <- fix: divide by dynamic width
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width; // <- fix: multiply by dynamic width
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      navigation.replace('SelectPhoneScreen');
    }
  };

  const skip = () => {
    navigation.replace('Home');
  };

  const Slide = ({ item }) => (
    <View style={[styles.slide, { width }]}> 
      {/* <- fix: make slide width dynamic */}
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const Footer = () => (
    <View style={styles.footer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && {
                backgroundColor: '#FF826C',
                width: wp(6),
              },
            ]}
          />
        ))}
      </View>
      <View style={{ marginBottom: hp(2) }}>
        <PrimaryButton
          onPress={goToNextSlide}
          label={currentSlideIndex === slides.length - 1 ? 'Get Started' : 'Next'}
        />
        <TouchableOpacity onPress={skip} style={{ marginTop: hp(1) }}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={width} // <- force re-render when orientation changes
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        contentContainerStyle={{ height: hp(75) }}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  image: {
    height: hp(50),
    width: wp(100),
    marginTop: hp(5),
  },
  title: {
    fontSize: wp(5.5),
    fontFamily: fontFamilies.SemiBold,
    color: color.primary,
    marginTop: hp(2),
    textAlign: 'center',
  },
  description: {
    fontSize: wp(4),
    color: '#FF826C',
    textAlign: 'center',
    marginTop: hp(1),
    maxWidth: wp(80),
    lineHeight: hp(3),
    fontFamily: fontFamilies.Regular,
    paddingHorizontal: wp(5),
  },
  footer: {
    height: hp(25),
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  indicator: {
    height: hp(1.2),
    width: wp(2),
    backgroundColor: '#FFCFC6',
    marginHorizontal: wp(1),
    borderRadius: wp(2),
  },
  skipText: {
    textAlign: 'center',
    color: '#0D1217',
    opacity: 0.4,
    fontSize: 18,
    marginBottom: hp(1),
  },
});

export default OnboardingScreen;
