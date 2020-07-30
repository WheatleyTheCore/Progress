import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


/**
 * This thing should show the list item that was passed into it, enable the 
 * user to say "done" and give data based around that, as well as go into the 
 * screen relating to that todo item that shows statistics and whatnot.
 */


export default (props) => {
    return (
        <Pressable onPress={() => {
            props.navigation.navigate('TodoScreen', { todoItem: props.getTodoItem() })
        }}>
            <View style={styles.container}>
                <Text>{props.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 2,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: 'red'
    }
})