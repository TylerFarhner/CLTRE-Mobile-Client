import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AllMessagesScreen from '../screens/AllMessagesScreen';
import DrawerNav from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ DrawerNav } options={{headerShown: false}} />
            <Tab.Screen name="UserProfile" component={ UserProfileScreen } />
            <Tab.Screen name="AllMessages" component={ AllMessagesScreen } />
        </Tab.Navigator>
    )
}

export default Tabs;