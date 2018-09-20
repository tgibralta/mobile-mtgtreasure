import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Landing from './screens/Landing'
import Home from './screens/Home'
import Signin from './screens/Signin'

export default createStackNavigator ({
  Landing: {
    screen: Landing
  },
  Home: {
    screen: Home
  },
  Signin: {
    screen: Signin
  }
})



// https://colorhunt.co/palette/124180
