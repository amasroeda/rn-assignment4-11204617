import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/login';
import AppNavigator from './components/navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),

  });
  return (
       <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
