/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UserProvider from './src/config/contextAPI/userProvider';

const AppWithProvider = () => (
      <UserProvider>
        <App />
      </UserProvider>
  );

AppRegistry.registerComponent(appName, () => AppWithProvider);
