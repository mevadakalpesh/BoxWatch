import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from '@screens/LoadingScreen';
import WelcomeScreen from '@screens/WelcomeScreen';
import SelectLanguageScreen from '@screens/SelectLanguageScreen';
import OnboardingScreen from '@screens/OnboardingScreen';
import SelectPhoneScreen from '@screens/SelectPhoneScreen';
import OTPVerificationScreen from '@screens/OTPVerificationScreen';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  
  let initialRouteName = 'WelcomeScreen';
  
  return (
    <NavigationContainer>
       <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
            
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SelectLanguageScreen" component={SelectLanguageScreen} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="SelectPhoneScreen" component={SelectPhoneScreen} />
            <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
            
            
          
       </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation;