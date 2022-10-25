import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Route from './src/navigation/Route';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Route/>
  );
}
