import React, {useState, useRef, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import OngoingTripSection from '@components/OngoingTripSection';
import BottomMenu from '@components/BottomMenu';
import SearchInput from '@components/form/SearchInput';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {fontFamilies, color} from '@constants';

const slides = [
  require('@assets/images/driver-onboarding1.png'),
  require('@assets/images/driver-onboarding1.png'),
  require('@assets/images/driver-onboarding1.png'),
];

const UserDashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  const scrollRef = useRef(null);
  const slideWidth = wp('90%') + wp('4%');

  const features = [
    {
      label: 'Chats',
      icon: require('@assets/icons/chat.png'),
    },
    {
      label: 'Requests',
      icon: require('@assets/icons/request.png'),
    },
    {
      label: 'Wishlist',
      icon: require('@assets/icons/heart.png'),
    },
  ];

  const trips = [
    {
      id: '1',
      title: 'Books (5 kg)',
      items: '10 items',
      time: 'Today at 8:30 PM',
      price: '₹12.00',
      status: 'COMING SOON',
      image: require('@assets/images/driver-onboarding1.png'),
    },
  ];

  const Items = [
    {label: 'Total Jobs', value: '20'},
    {label: 'Completed', value: '10'},
    {label: 'Canceled', value: '0'},
  ];

  // Auto-advance every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      setCurrentSlide(next);
      scrollRef.current?.scrollTo({x: next * slideWidth, animated: true});
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlide, slideWidth]);

  const onScrollEnd = e => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / slideWidth);
    setCurrentSlide(index);
  };

  const onAvatarPress = () => {
    console.log('Avatar pressed');
  };

  const handleStatPress = label => {
    console.log(`${label} pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        {/* 1. HEADER */}
        <View style={styles.header}>
          <View>
            <View style={styles.nameWrapper}>
              <Text style={styles.greeting}>Hello!</Text>
              <Text style={styles.username}>Kalpesh </Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>Verified</Text>
              <Image
                source={require('@assets/icons/verify.png')}
                style={styles.badgeIcon}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={onAvatarPress}
            style={styles.avatarWrapper}>
            <Image
              source={require('@assets/icons/avatar.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        {/* 2. SLIDER */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          onMomentumScrollEnd={onScrollEnd}
          style={styles.slider}>
          {slides.map((src, i) => (
            <Image
              key={i}
              source={src}
              style={styles.slideImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentSlide && styles.dotActive]}
            />
          ))}
        </View>

        {/* 3. AMOUNT SECTION */}
        <View style={styles.amountCard}>
          <View>
            <Text style={styles.amountLabel}>Available Balance</Text>
            <Text style={styles.amountValue}>₹250.00</Text>
          </View>

          <Image
            source={require('@assets/icons/atm.png')}
            style={styles.amountIcon}
          />
        </View>

        {/* 4. DASHBOARD ITEMS */}
        <View style={styles.statsRow}>
          {Items.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.statCard}
              onPress={() => handleStatPress(item.label)}>
              <View style={styles.boxValue}>
                <Text style={styles.statValue}>{item.value}</Text>
              </View>

              <Text style={styles.statLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.actionsRow}>
          {features.map((feature, i) => (
            <TouchableOpacity key={i} style={styles.statCard}>
              <View style={styles.boxValue}>
                <Image source={feature.icon} style={styles.actionIcon} />
              </View>

              <Text style={styles.statLabel}>{feature.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 5. SEARCH */}
        <SearchInput />
      </ScrollView>
      <OngoingTripSection />

      {/* <BottomMenu activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  inner: {padding: wp('4.5%')},

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    aliganItems: 'center',
    marginBottom: hp('3%'),
  },
  nameWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#FF6347',
    fontFamily: fontFamilies.SemiBold,
  },
  username: {
    fontSize: wp('6%'),
    fontWeight: '700',
    color: '#0D1217',
    fontSize: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    padding: wp('0.5%'),
    marginTop: hp('0.5%'),
    borderRadius: 20,
    borderColor: '#BABDC1',
    borderWidth: 1,
    marginTop: wp('2.5%'),
  },
  badgeIcon: {
    width: wp('4%'),
    height: wp('4%'),
  },
  badgeText: {
    color: '#13C296',
    fontSize: 12,
    fontFamily: fontFamilies.Medium,
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    shadowColor: '#0D0A2C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  avatar: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: wp('7%'),
  },
  slider: {
    height: hp('20%'),
    marginBottom: hp('1%'),
  },
  slideImage: {
    width: wp('90%'),
    height: '100%',
    marginRight: wp('4%'),
    borderRadius: wp('3%'),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: hp('2%'),
  },
  dot: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#BABDC1',
    marginHorizontal: wp('0.5%'),
  },
  dotActive: {
    backgroundColor: '#FF826C',
    width: wp('5%'),
  },
  amountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FFF8E1',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 7,
    marginBottom: hp('2%'),
    position: 'relative',
    borderColor: '#E9EAEB',
    borderWidth: 1,
  },
  amountLabel: {
    fontSize: 18,
    color: '#878787',
    fontFamily: fontFamilies.Regular,
  },
  amountValue: {
    fontSize: 27,
    fontWeight: '700',
    marginTop: hp('0.5%'),
    color: '#13C296',
    fontFamily: fontFamilies.SemiBold,
  },
  amountIcon: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginBottom: hp('2%')
  },
  statCard: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    borderRadius: wp('2%'),
    padding: wp('3%'),
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
    margin: 10,
  },
  boxValue: {
    width: 50,
    height: 50,
    backgroundColor: '#f6f7fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  statValue: {
    fontSize: 27,
    fontWeight: '700',
    color: '#FF6347',
  },
  statLabel: {
    fontSize: 12,
    color: '#878787',
    fontFamily: fontFamilies.Regular,
    marginTop: hp('1.5%'),
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },

  actionIcon: {
    width: wp('8%'),
    height: wp('8%'),
  },
});

export default UserDashboard;
