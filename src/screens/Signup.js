import React, { useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text,useWindowDimensions,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';    
import Tab1 from './signupTab1';
import Tab2 from  './signupTab2';    
import Header from './Header';  

const FirstRoute = () => (
  <Tab1
 
  /> 
 
);

const SecondRoute = () => (
  <Tab2  
  
  />
);

 

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute, 
  
});


export default function Signup({navigation}) {


      const layout = useWindowDimensions();

      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: 'first', title: ' Signup' },
        { key: 'second', title: 'Marketer' }, 
      ]);  
      
      

    return (
     

      
       
        <>
        <Header />
        <TabView
        navigation={navigation}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        indicatorStyle={{ backgroundColor: 'white' }}
        renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#3357A0'}} />}  
      />
     </>
    
      
     

      



      
    );

 
}

 
 