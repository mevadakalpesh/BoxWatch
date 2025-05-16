// components/OngoingTripSection.js

import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const trips = [
  {
    id: '1',
    title: 'Books (5 kg)',
    items: '10 items',
    time: 'Today at 8:30 PM',
    price: '₹12.00',
    status: 'COMING SOON',
    image: require('@assets/images/package.png'),
  },
  {
    id: '2',
    title: 'Clothes (3 kg)',
    items: '6 items',
    time: 'Tomorrow at 10:00 AM',
    price: '₹8.50',
    status: 'COMING SOON',
    image: require('@assets/images/driver-onboarding1.png'),
  },
];

const OngoingTripSection = () => {
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSingle = trips.length === 1;

  // Adjust card width so next slide peeks when multiple
  const cardWidth = isSingle ? wp('92%') : wp('85%');
  const sidePadding = wp('4%');

  const onMomentumScrollEnd = e => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (cardWidth + sidePadding));
    setCurrentIndex(index);
  };

  const renderTrip = ({item, index}) => (
    <View
      style={[
        styles.tripCard,
        {
          width: cardWidth,
          marginLeft: isSingle ? sidePadding : index === 0 ? sidePadding : 0,
          marginRight: sidePadding,
        },
      ]}>
      <Image source={item.image} style={styles.tripImage} />
      <View style={styles.tripInfo}>
        <View style={styles.actionBtnGroup}>
          <Pressable
            style={({pressed}) => [
              styles.actionIcon,
              pressed && {opacity: 0.8},
            ]}>
            <Image
              source={require('@assets/icons/routing.png')}
              style={styles.actionIcon}
            />
          </Pressable>

          <Pressable
            style={({pressed}) => [
              styles.actionIcon,
              pressed && {opacity: 0.8},
            ]}>
            <Image
              source={require('@assets/icons/more.png')}
              style={styles.actionIcon}
            />
          </Pressable>
        </View>

        <View>
          <Text style={styles.tripTitle}>
            {item.title} <Text style={styles.items}>{item.items}</Text>
          </Text>
          <View style={styles.row}>
            <Image
              source={require('@assets/icons/clock-circle.png')}
              style={styles.iconSmall}
            />
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.status}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.listWarpper}>
      <FlatList
        ref={listRef}
        data={trips}
        keyExtractor={item => item.id}
        renderItem={renderTrip}
        horizontal
        pagingEnabled={!isSingle}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        snapToInterval={cardWidth + sidePadding}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tripCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    padding: wp('3%'),
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 10,
    marginBottom: wp('10%'),
    marginTop: wp('2.5%'),
  },
  tripImage: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('2%'),
    marginRight: wp('3%'),
  },
  tripInfo: {
    flex: 1,
  },
  actionBtnGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  tripTitle: {
    fontWeight: '600',
    fontSize: wp('4%'),
  },
  items: {
    fontWeight: '400',
    fontSize: wp('3.5%'),
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  iconSmall: {
    width: wp('4%'),
    height: wp('4%'),
    marginRight: wp('1%'),
  },
  actionIcon: {
    width: wp('4.5%'),
    height: wp('4.5%'),
    marginRight: wp('1%'),
  },
  time: {
    color: '#555',
  },
  price: {
    color: '#FF6347',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  status: {
    backgroundColor: '#FFC700',
    borderRadius: wp('1%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.3%'),
  },
  statusText: {
    fontWeight: '600',
    fontSize: wp('3%'),
    color: 'white',
  },
});

export default OngoingTripSection;
