// In App.js in a new project

import * as React from 'react';
import { Button,View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Here i will try and import the swipe library
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';


import Swipeable from 'react-native-gesture-handler/Swipeable';
const todoList = [
  { id: '1', text: 'Learn JavaScript' },
  { id: '2', text: 'Learn React' },
  { id: '3', text: 'Learn TypeScript' },
];

const Separator = () => <View  />;

const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: '#40394a',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};

const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Text
        style={{
          color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};

const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};

const ListItem = ({ text }) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
        {text}
      </Text>
    </View>
  </Swipeable>
);
// End swiping

const homeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}>
     <Text>This is page one and should show when the application loads</Text>
     <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
      <Text> </Text>
           <Button 
      title="Page Three"
      onPress={() => {navigation.navigate('pageThree')}}
      ></Button>

<SafeAreaView >
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
          Swipe right or left
        </Text>
<FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
 </SafeAreaView>
    </View>
   
  );
}


const twoScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the second Screen and this should show you press any page two button</Text>
      <Button 
      title="Page One"
      onPress={() => {navigation.navigate('pageOne')}}
      ></Button>
 <Text> </Text>
<Button 
      title="Page Three"
      onPress={() => {navigation.navigate('pageThree')}}
      ></Button>
    </View>
  );
}

const threeScreen = ({navigation}) => {
  return (
    <View >
      <Text>This is page three and should show when you press the page three button</Text>
      <Button 
      title="Page One"
      onPress={() => {navigation.navigate('pageOne')}}
      ></Button>
       <Text> </Text>
       <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="pageOne" component={homeScreen} />
        <Stack.Screen name="pageTwo" component={twoScreen} />
        <Stack.Screen name="pageThree" component={threeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;