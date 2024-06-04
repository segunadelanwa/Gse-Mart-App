import React, { Component } from 'react'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import call from 'react-native-phone-call'
import { Alert,View,Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity,Image ,ScrollView, Linking } from 'react-native'; 

export default function PostDetails( props ) {
    
      const args = {
            number: props.ValueUsername, // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
          }


   
   return (
    <View style={styles.container}>


        <View style={{padding: 20, alignItems: 'center' }}>
              <Text style={{fontWeight: 'bold',fontSize: 20,}}>{props.ValueProduct_name}</Text>

              <Text style={{fontSize: 20, fontWeight: 'bold',color:'red'}}>
              PRICE ₦{props.ValuePrice}
              </Text>  
        </View>


        <View style={{height: 400,width: '90%',marginLeft:'5%',}}>

              <Image source={{ uri: "https://gse-mart.com/reg_users/"+props.ValueUsername+"/"+props.ValueImg2 }}  style={{ width: '100%', height: '100%',borderRadius:15 }}  /> 
        </View>


        <View style={{height: 200,width: '90%',marginLeft:'5%',flexDirection:'row', marginTop: 5,}}>

              <Image source={{ uri: "https://gse-mart.com/reg_users/"+props.ValueUsername+"/"+props.ValueImg3 }}  style={{ width: '45%', height: '100%',borderRadius:15 }}  /> 
 

              <Image source={{ uri: "https://gse-mart.com/reg_users/"+props.ValueUsername+"/"+props.ValueImg4 }}  style={{ width: '45%', height: '100%',borderRadius:15,marginLeft: '5%' }}  /> 
        </View>

       <View style={{marginTop: 10, padding: 30}}>

          <Text style={{fontSize: 18 }}>
          <Text style={{fontWeight: 'bold'}}> STOCK STATUS </Text> {props.ValuepostOrder_status} 
          </Text> 

          <Text style={{fontSize: 18 }}>
          <Text style={{fontWeight: 'bold'}}> PHONE  </Text> {props.ValueUsername} 
          </Text> 

          <Text style={{fontSize: 18 }}>
          <Text style={{fontWeight: 'bold'}}> DETAILS  </Text> 
          <Text>{props.ValueTextarea} </Text>
          </Text> 

       </View>
              <View style={{flexDirection: 'row'}}>

                <View style={{width: '50%'}}>
                    <TouchableOpacity  onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=234'+props.ValueUsername)}>
                  <View style={styles.whatsappButton} >
                  <Text style={styles.formText}>
                  <FontAwesome name="whatsapp"  color={'white'} size={25} />     Whatsapp Me   
                  </Text>

                  </View>      
                  </TouchableOpacity>              
                </View>




                <View style={{width: '50%'}}>
                  <TouchableOpacity  onPress={() => call(args).catch(console.error)}>
                  <View style={styles.callButton} >
                  <Text style={styles.formText}>
                  <Feather name="phone-call"  color={'white'} size={25} />    Call  Me  
                  </Text>

                  </View>      
                  </TouchableOpacity>                
                </View>



              
              </View>
             
            <TouchableOpacity  onPress={() => Linking.openURL('https://gse-mart.com/'+props.ValueUsername)}>
            <View style={styles.formButton} >
            <Text style={styles.formText}>
             <FontAwesome name="globe"  color={'white'} size={25} />  Visit My  Website     
              </Text>
            
            </View>      
            </TouchableOpacity>
                
    </View>
        );
   
}

 
const styles = StyleSheet.create({
  container: {
 
  },
  
  item: {
  width: '45%',
  padding: 5,
  marginLeft: '2.5%',
  marginTop: 24,
  backgroundColor: '#eee',
  borderBottomWidth: 1,
  borderRadius: 5,
  borderBottomColor: 'blue',
  borderTopColor: 'blue'
  },
  
  firmName: {
  fontWeight: 'bold',
  color: '#3357A0',
  
   },
   
   formButton: {
      
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#3357A0',
  },
   whatsappButton: {
      
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: 'green',
  },
   callButton: {
      
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: '#6C99D2', 
 
   
  },

 
  
 
  formText: {  
      color: '#fff',
      fontWeight: 'bold', 
      textAlign: 'center',
      fontSize: 16,
      },


  })