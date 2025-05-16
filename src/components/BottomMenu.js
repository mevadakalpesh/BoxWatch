import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const menuItems = [
  { id: 'home', label: 'Home', icon: require('@assets/icons/clock-circle.png') },
  { id: 'trip', label: 'New Trip', icon: require('@assets/icons/clock-circle.png') },
  { id: 'calendar', label: 'Calendar', icon: require('@assets/icons/clock-circle.png') },
  { id: 'bell', label: 'Alerts', icon: require('@assets/icons/clock-circle.png') },
  { id: 'profile', label: 'Profile', icon: require('@assets/icons/clock-circle.png') },
];

const BottomMenu = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item) => {
        const isActive = activeTab === item.id;
        const itemStyle = item.id === 'trip' ? styles.tripButton : styles.menuItem;
        return (
          <TouchableOpacity
            key={item.id}
            style={itemStyle}
            onPress={() => setActiveTab(item.id)}
          >
            <Image
              source={item.icon}
              style={[
                item.id === 'profile' ? styles.avatar : styles.icon,
                isActive && styles.activeIcon,
              ]}
            />
            {item.label !== '' && (
              <Text style={[styles.menuLabel, isActive && styles.activeText]}> 
                {item.label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: '#fff',
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    elevation: 10,
    alignItems: 'center',
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: wp('7%'),
    height: wp('7%'),
    tintColor: '#999',
  },
  avatar: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
  },
  tripButton: {
    backgroundColor: '#FF7043',
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -hp('4%'),
  },
  menuLabel: {
    fontSize: wp('3.5%'),
    marginTop: hp('0.5%'),
    color: '#888',
  },
  activeText: {
    color: '#FF5722',
    fontWeight: 'bold',
  },
  activeIcon: {
    tintColor: '#FF5722',
  },
});

export default BottomMenu;
