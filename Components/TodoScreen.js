import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

/*
 This component should retrieve the data about said todo from memory, and then display info about it.
 The todo to look for should be passed as a param to this component.
 */

export default ({ navigation, route }) => {
    return (
        <View>
            <Text>{JSON.stringify(route.params.todoItem)}</Text>
        </View>
    )
}