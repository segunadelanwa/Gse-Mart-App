import React, { useState, useEffect } from 'react';
import { AuthContext }  from '../components/context';
import {Text, View, TouchableOpacity,Image,Linking} from 'react-native';
 
export default function AutoLogout({ navigation }) {
    const { signOut } = React.useContext(AuthContext); 


const AutoLogout=()=>{

    
    { signOut }

}
    useEffect(() => 
    {
    
        AutoLogout
     
    },[]);



    return (
      <View>
      <Text>
       
      </Text>
      </View>
    )
 
}

