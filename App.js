import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Route from './src/navigation/Route';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Route/>
  );
}
