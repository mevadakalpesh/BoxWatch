import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_MARGIN = 8;
const NUM_COLUMNS = 2;
const CARD_SIZE = (width - CARD_MARGIN * (NUM_COLUMNS * 2) - 32) / NUM_COLUMNS;

const vehicles = [
  {
    key: 'bike',
    label: 'Bike',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'auto',
    label: 'Auto',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'car',
    label: 'Car',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'bus',
    label: 'Bus',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'truck',
    label: 'Truck',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'van',
    label: 'Van',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'bolero',
    label: 'Bolero',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
  {
    key: 'train',
    label: 'Train',
    icon: require('@assets/images/driver-onboarding1.png'),
  },
];

const SelectVehicleScreen = ({navigation}) => {
  const [selected, setSelected] = useState(null);

  const renderItem = ({item}) => {
    const isActive = selected === item.key;
    return (
      <TouchableOpacity
        style={[styles.card, isActive && styles.activeCard]}
        onPress={() => setSelected(item.key)}
        activeOpacity={0.8}>
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    if (selected) {
      // navigate or handle selection
      navigation.navigate('TripDetails', {vehicle: selected});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Your Vehicle</Text>
        <View style={styles.menuPlaceholder} />
      </View>
      <Text style={styles.subtitle}>Vehicle for this trip</Text>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        scrollEventThrottle={16} // higher refresh rate for scroll events
        decelerationRate="normal" // or "fast" for snappier feel
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={[styles.nextButton, !selected && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selected}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  back: {fontSize: 16, color: '#333'},
  title: {fontSize: 20, fontWeight: 'bold', color: '#000'},
  menuPlaceholder: {width: 24},
  subtitle: {fontSize: 14, color: '#666', marginBottom: 12},
  list: {paddingBottom: 24},
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE + 24,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    margin: CARD_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeCard: {
    borderColor: '#FF6B4A',
    backgroundColor: '#FFF3F0',
  },
  icon: {width: 48, height: 48, marginBottom: 8},
  label: {fontSize: 14, color: '#333'},
  activeLabel: {color: '#FF6B4A', fontWeight: '600'},
  nextButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF6B4A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  disabledButton: {backgroundColor: '#FFC1B6'},
  nextText: {fontSize: 16, color: '#fff', fontWeight: 'bold'},
});

export default SelectVehicleScreen;
