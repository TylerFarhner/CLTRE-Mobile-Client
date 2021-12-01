import React from 'react'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

// Screen imports
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';


function AppNavigator() {
    
    function LogoTitle() {
        return (
            <Image 
                style={{ width: 50, height: 50 }}
                source={require('../assets/images/MobileLogo.png')}
            />
        )
    }
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    // TODO: Figure out why headerLeft: null wont remove back option IOS or Android
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                />
                <Stack.Screen
                    name="Profile"
                    component={UserProfileScreen}
                    options={{ headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator