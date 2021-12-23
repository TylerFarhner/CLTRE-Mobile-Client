import React from 'react'
import {Image, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

// Screen imports
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Tabs from './TabNavigator'
import DrawerNav from './DrawerNavigator';
// import HomeScreen from '../screens/HomeScreen';
// import UserProfileScreen from '../screens/UserProfileScreen';


// function AppNavigator() {
    
//     function LogoTitle() {
//         return (
//             // <View style={{flexDirection: 'row', alignItems:  ,justifyContent: 'center'}}>
//                 <Image 
//                 style={{ width: 100, height: 50 }}
//                 source={require('../assets/images/GreenMobileLogo.png')}
//             />
//             // </View>
//         )
//     }

//     return(
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//             {/* <Stack.Navigator> */}
//                 <Stack.Screen 
//                     name="Login"
//                     component={LoginScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen 
//                     name="Register"
//                     component={RegisterScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen 
//                     name="Home"
//                     component={HomeScreen}
//                     // TODO: Figure out why headerLeft: null wont remove back option IOS or Android
//                     options={{ headerLeft: () => null,headerStyle: 'center',headerTitle: (props) => <LogoTitle {...props} /> }}
//                 />
//                 <Stack.Screen
//                     name="Profile"
//                     component={UserProfileScreen}
//                     options={{ headerShown: true}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }


function AppNavigator() {
    
    // function LogoTitle() {
    //     return (
    //         // <View style={{flexDirection: 'row', alignItems:  ,justifyContent: 'center'}}>
    //             <Image 
    //             style={{ width: 100, height: 50 }}
    //             source={require('../assets/images/GreenMobileLogo.png')}
    //         />
    //         // </View>
    //     )
    // }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabsNav">
            {/* <Stack.Navigator> */}
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
                    name="TabsNav"
                    component={ Tabs }
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator