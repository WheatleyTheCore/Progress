import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
} from 'react-native';

import TodoItem from './Storage/TodoItem'
import TodoList from './Storage/TodoList'
import ListItemView from './ListItemView'

import AsyncStorage from '@react-native-community/async-storage';


export default ({ navigation }) => {
    /*
      TODO: break out into its own component, instead read directly from memory to build up list
    */
    const [value, onChangeText] = useState('Useless Placeholder');
    const [list, updateList] = useState([]);

    let todoItem = new TodoItem('test', 'asdf');

    useEffect(() => {
        AsyncStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                {
                    list.map((listItem) => {
                        return <ListItemView key={String(Math.random() * 10)} navigation={navigation} title={listItem} />
                    })
                }
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => {
                        onChangeText(text)
                    }}
                    value={value}
                />

                <Button title="save" onPress={async () => {
                    todoItem.update(value)
                    await updateList(list ? [...list, value] : [value]) // SEE WHY LIST IN STORAGE IS ONE BEHIND LIST IN COMPONENT STATE
                    await AsyncStorage.setItem(value, JSON.stringify(todoItem));
                }} />

                <Button title="retrive" onPress={async () => {
                    let item = await AsyncStorage.getItem('list');
                    console.log(JSON.parse(item));
                }} />
                <Button title='clear' onPress={async () => {
                    updateList([])
                    await AsyncStorage.setItem('list', JSON.stringify([]));
                }} />
            </SafeAreaView>
        </View>
    )
}