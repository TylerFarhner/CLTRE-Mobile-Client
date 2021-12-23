import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../screens/AboutScreen'
import AllMessagesScreen from '../screens/AllMessagesScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Messages" component={AllMessagesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;