import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  return <RootNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
