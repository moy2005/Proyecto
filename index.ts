import { registerRootComponent } from 'expo';

import App from './App';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import ControlsScreen from './app/screens/ControlScreen';
import HistoryScreen from './app/screens/HistorialScreen';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HistoryScreen);
