/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoItem from './Components/Storage/TodoItem'
import TodoList from './Components/Storage/TodoList'
import ListItemView from './Components/ListItemView';

let Stack = createStackNavigator();
let todoList = new TodoList();

const Home = ({ navigation }) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  let todoItem = new TodoItem('test', 'asdf');

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {
          todoList.list.map((listItem) => {
            return <ListItemView navigation={navigation} title={listItem} />
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
          todoList.add(todoItem.title);
          await AsyncStorage.setItem(value, JSON.stringify(todoItem));
          await AsyncStorage.setItem('list', JSON.stringify(todoList.list));

        }} />

        <Button title="retrive" onPress={async () => {
          let item = await AsyncStorage.getItem('list');
          console.log(JSON.parse(item));
        }} />
        <Button title='clear' onPress={async () => {
          todoList.clear();
          await AsyncStorage.setItem('list', JSON.stringify(todoList.list));
        }} />
      </SafeAreaView>
    </View>
  )

}

const test = () => {
  return (
    <View>
      <Text>hi</Text>
    </View>
  )
}

const App = () => {


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="asdf" component={test} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
