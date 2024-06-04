import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native'; 

export default function Loading2() {
  return (
    <View style={styles.header}>
       
    <Image  source={require('../../assets/loading1.gif')}  style={{ width: 150, height: 150 }} /> 
    <Text  style={{ textAlign: 'center',fontSize: 20,color:'#3357A0' }}> Loading... </Text> 
  </View>

  );
}



const styles = StyleSheet.create({
    header: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'white',
     },
    

 
 
 
 })