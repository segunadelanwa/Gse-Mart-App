import React, { useState, useEffect,useContext,  } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity,ScrollView, Image} from 'react-native';
import { AuthContext } from '../components/context'; 

export default function Logout({ navigation }){

  const { signOut } = React.useContext(AuthContext);
  

    function logout(){
  
     
      alert('clicked');
       //signOut();
     
  
       }  
     
  
     
    return (
        <TouchableOpacity  onPress={signOut}>
        <View>
        
         <Text style={styles.header}>  LogOut   </Text>
        
           
        </View>
        </TouchableOpacity>
     );
  }
  
  
  const styles = StyleSheet.create({
 
   
  });