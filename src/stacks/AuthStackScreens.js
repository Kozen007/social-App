import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SingnInScreen';
import SignUpScreen from '../screens/SingUpScreen';

export default AppStackScreens = () =>{
    const AppStack = createStackNavigator();
    return (
        <AppStack.Navigator headerMode="none">
              <AuthStack.Screen name="signin" component={signInScreen} />
              <AuthStack.Screen name="signin" component={signInScreen} />
        </AppStack.Navigator>
    )
}