import React from 'react'
import {TabNavigator} from 'react-navigation'
import {Landing} from './../screens/Landing'

export const Tabs = TabNavigator({
    Landing: {
        screen: Landing
    }
})