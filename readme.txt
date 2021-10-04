Create a new app:
one time only install globally the create native appnpm install -g create-react-native-app

Create a new project 
C:\Users\Tutorialspoint>cd Desktop
C:\Users\Tutorialspoint\Desktop>create-react-native-app WhateverYouWant

NOTE: if you get an error like this
'create-react-app' is not recognized as an internal or external command
Try this npx create-react-app my-app

Open a new terminal in the app

When the project is created 
install the navigation by running:
npm install @react-navigation/native
install dependencies by running:
expo install react-native-screens react-native-safe-area-context
install native-stack by running: 
npm install @react-navigation/native-stack


Call libraries at the top of app.js file put 

import * as React from 'react';
import { Button,View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Build a simple first screen

const homeScreen = ({navigation}) => {
  return (
    <View>
     <Text>This is page one and should show when the application loads</Text>
     <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
     
    </View>
   
  );
}

Build your stack Navigator the first one on the list is the load screen when the application starts

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="pageOne" component={homeScreen} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

build a second screen 

const twoScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the second Screen and this should show you press any page two button</Text>
      <Button 
      title="Page One"
      onPress={() => {navigation.navigate('pageOne')}}
      ></Button>
 <Text> </Text>

    </View>
  );
}


edit the navigation stack

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="pageOne" component={homeScreen} />
        <Stack.Screen name="pageTwo" component={twoScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

run the application and it should navigate between pages

Add more screens using the template 

const xxx = ({navigation}) => {
  return (
    <View>
     
     

    </View>
  );
}

remember to modify the stack navigation every time you build a page 

The full app.js for a two page layout will look like this 


// In App.js in a new project

import * as React from 'react';
import { Button,View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const homeScreen = ({navigation}) => {
  return (
    <View>
     <Text>This is page one and should show when the application loads</Text>
     <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
      <Text> </Text>
          
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
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
