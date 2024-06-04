import React, { useState, useEffect } from 'react'; 
import {ImageBackground,FlatList, ScrollView, StyleSheet, Text, View, 
  Modal, TouchableOpacity, Image,Linking} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Foundation from 'react-native-vector-icons/Foundation'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import { AuthContext } from '../components/context'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function HomeScreen({ navigation }){
  const { signOut } = React.useContext(AuthContext);  
 const [loginData, setLoginData] = useState([]);  
   
 useEffect(() => 
{

 
//signOut();
 
  try{
        
    AsyncStorage.getItem('login_session')
   .then((value) => {
     const data = JSON.parse(value); 

     setLoginData(data); 


   });
    

 }
 catch(error){

   console.log(error) 
 }   


 
}, []);
      



    return (
        
        <ImageBackground  
        style={{        
          width: '100%',
        height: '100%', 
        flex: 1,}}    
        source={require('../assets/mobilebg.jpeg')}  >
       
        <View style={{ marginLeft: '5%',marginRight: '5%',marginTop: 20,}}>

             
                <View>          
                    <Text style={[styles.myFont,    {color: 'white',textAlign: 'left',  }]}>
                    <AntDesign name="home"    color={'white'}    size={25}/> <Text style={{fontSize: 25}}>{loginData.firmname}   </Text>   </Text>
                </View>
                <View>         
                    <Text style={[styles.myFont,     {color: 'white',textAlign: 'left',textTransform: 'capitalize',  }]}>
                    <FontAwesome name="registered"    color={'white'}    size={20}/> {loginData.reg_type} ( { loginData.label } { loginData.label2 } )  
                    </Text>
                 </View>
                 <View>          
                    <Text style={[styles.myFont,    {textAlign: 'left', color: 'white', }]}>
                      <Foundation name="web"    color={'white'}    size={25}/> www.gse-mart.com/{loginData.username}   </Text>
                </View>



                <View style={[styles.box1, {justifyContent: 'center',paddingTop: 20,marginTop: 50, paddingBottom: 20} ]}>
                  <View> 
                      <FontAwesome5 name="cloud-upload-alt"    color={'white'}    size={25}/>
                      <Text style={[styles.myFont, {color: 'white',fontWeight:'bold'}]}>
                      ACCOUNT  STORAGE  
                      </Text>              
                  </View>


                  <View> 
                  <Text style={{fontSize: 18,color: 'white'}}> (Used Storage {loginData.post_list}  )</Text>
                  <Text style={{fontSize: 18,color: 'white'}}> (Unused Storage { loginData.storage} )</Text>
                  </View>

                </View>


                
                <View style={[styles.box2, {justifyContent: 'center',paddingTop: 20, paddingBottom: 20}] }>
                  <View> 
                      <Feather name="package"    color={'#3357A0'}    size={30}/>
                      <Text style={[styles.myFont, {color: '#3357A0',fontWeight:'bold',  }]}>
                      SUBSCRIPTION TYPE 
                      </Text>              
                  </View>


                    <View> 
                    <Text style={{fontSize: 18,color: '#3357A0'}}> ( {loginData.sub_type} )</Text>
                    </View> 

                </View>




                <View style={[styles.box3, {justifyContent: 'center', paddingTop: 20, paddingBottom: 20}    ]}>


                    <View>
                        <MaterialIcons name="date-range"    color={'white'}    size={30}/>
                        <Text style={[styles.myFont, {color: 'white',fontWeight:'bold'}]}> 
                        SUB EXPIRING DATE   
                        </Text>             
                    </View>



                    <View>
                      <Text style={{fontSize: 16,color: 'white'}}>(Sub Start On  {loginData.sub_start} ) </Text>
                      <Text style={{fontSize: 16,color: 'white'}}>(Sub Expires On {loginData.sub_expire} ) </Text>
                    </View>

                </View>






        </View>
       
         </ImageBackground>
    )
}

 

//https://oblador.github.io/react-native-vector-icons/

const styles = StyleSheet.create({
    
  box1:{
    flexDirection:'column',
  
    backgroundColor: '#007bff',
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 25, 
 
 },


 box2:{
flexDirection:'column',
 
backgroundColor: 'white',
marginTop: 20,
borderRadius: 10,
paddingLeft: 25, 
borderWidth: 1,
borderColor: '#777'
 },


 box3:{
flexDirection:'column',
 
backgroundColor: '#007bff',
marginTop: 20,
borderRadius: 10,
paddingLeft: 25, 
 },

 
 myFont:{
  fontSize: 18

 },
 
})

