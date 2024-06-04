import React, { useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text,useWindowDimensions,FlatList ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';    
import Tab2 from '../src/screens/tab2';
import Tab3 from '../src/screens/tab3';    
   

const FirstRoute = ({navigation}) => (
  <Tab3 
  Navigation={navigation}
  /> 
 
);

const SecondRoute = ({navigation}) => (
  <Tab2   
  Navigation={navigation}
 
  />
);

 

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute, 
  
});


export default function DashoardMart() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Artisans' },
      { key: 'second', title: 'Vendors' }, 
    ]);  
    
    

  return (
   

    
     
    <>   
     
      <TabView
     
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
