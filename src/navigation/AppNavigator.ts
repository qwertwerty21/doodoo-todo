import { createSwitchNavigator } from 'react-navigation';

import EntryNavigator from './EntryNavigator';

export const AppNavigator = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Entry: EntryNavigator,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Entry',
    // navigationOptions: {
    //   headerStyle: styles.header,
    // },
  },
);
