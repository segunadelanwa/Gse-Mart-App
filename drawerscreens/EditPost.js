import React, { useState, useEffect} from 'react';  
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image,Alert, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,ActivityIndicator } from 'react-native'



export default function EditPost(props) {
  const [formData, setFormData] = useState({

    product_name: props.product_name,
    editprice: props.editprice,
    username: props.username,
    town: props.town,
    textarea: props.textarea,
    order_status: props.order_status,
    post_id: props.post_id, 


  });               
 

  const InserRecord = () => {  
 

    var user_product_name = formData.product_name;       
    var user_editprice    = formData.editprice;       
    var user_username     = formData.username;       
    var user_town         = formData.town;            
    var user_textarea     = formData.textarea;            
    var user_order_status = formData.order_status;            
    var user_post_id      = formData.post_id;            
 
           
            var InsertAPIURL = "https://gse-mart.com/call_api.php?action=postupdate_api";
            var headers = {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
            var Data = {
                con_user_post_id:user_post_id, 
                con_user_textarea:user_textarea, 
                con_user_order_status:user_order_status, 
                con_user_town:user_town, 
                con_user_username:user_username, 
                con_user_editprice:user_editprice, 
                con_user_product_name:user_product_name,  
            };

            fetch(InsertAPIURL,
                {
                method:'POST',
                header:headers,
                body: JSON.stringify(Data)

                
        
                })
                .then((response) => response.json())
                .then((response) => {
        
                    
                    if(response[0].success == "ok"){

                         
                           
                            Alert.alert('SUCCESS!',  response[0].feedback2,[
                                {text: 'Okay'}
                            ]);

                    }else if(response[0].success == "Failed"){

                      alert(response[0].feedback )
                    }
                


                    })
                .catch((error) => {

                alert("Error" +error);

                })
            

  
 
}
 
  return (
   
 

    <PaperProvider>
    <ScrollView>   
        <KeyboardAvoidingView style={styles.container} behavior="padding" >

          <View style={{justifyContent: 'center'}}>
          <Image source={{ uri: "https://gse-mart.com/reg_users/"+props.username+"/"+props.image }}  style={{ width: 150, height: 150 }}  /> 


          <Text style={{fontSize: 25,textAlign:'center',marginTop: 30,fontWeight: 'bold'}}>  {props.product_name}</Text>

          </View>



            <View  style={styles.inputcontainer}>

           

            
    
            <View style={{marginTop: 50}}> 
            <Text style={{color:'white',fontSize: 16,}}>Change  Product Name</Text>
            <TextInput     
            onChangeText={text => setFormData({...formData, product_name: text })}  
            placeholder={props.product_name} 
            
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default" 
            />
            </View>

            <View style={{marginTop: 15}}> 
            <Text style={{color:'#3357A0',fontSize: 16,}}> Change Price</Text>
            <TextInput   
            onChangeText={text => setFormData({...formData, editprice: text })}
            placeholder={props.editprice} 
            
            style={styles.input}
            autoCapitalize="none"
            keyboardType="numeric"
            />   
            </View>
            

            <View style={{marginTop: 15}}> 
            <Text style={{color:'#3357A0',fontSize: 16,}}>Change Post Contact</Text>
            <TextInput    
            onChangeText={text => setFormData({...formData, username: text })}
            placeholder={props.username} 
            
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default"
            /> 
            </View>         

            <View style={{marginTop: 15}}> 
            <Text style={{color:'#3357A0',fontSize: 16,}}>Change Town</Text>
            <TextInput    
            onChangeText={text => setFormData({...formData, town: text })} 
            placeholder={props.town}
           
            style={styles.input}
            autoCapitalize="none"
            keyboardType="phone-pad"
            />
            </View>

            <View style={{marginTop: 15}}> 
            <Text style={{color:'#3357A0',fontSize: 16,}}>Change Post Availability</Text>
            <TextInput    
            onChangeText={text => setFormData({...formData, order_status: text })}
            placeholder={props.order_status } 
            
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default"
            
            />  
            </View>        


            <View style={{marginTop: 15}}> 
            <Text style={{color:'#3357A0',fontSize: 16,}}>Change Post Description</Text>
             <TextInput    
            onChangeText={text => setFormData({...formData, textarea: text })}
            placeholder={props.textarea } 
            
            style={styles.input}
            autoCapitalize="none"
            keyboardType="default"
            
            />            
            </View>
         

                
    


    
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                            onPress={InserRecord}
                            style={styles.button}
                            >
                                <Text style={styles.buttonText}>UPDATE POST</Text>
                            </TouchableOpacity> 
                        </View>         
            </View>

        



        
            



        
        </KeyboardAvoidingView>
    </ScrollView> 
    </PaperProvider> 
  )
}

 
const styles = StyleSheet.create({
  header: {  
      flexDirection: 'row',
      backgroundColor: '#c908bd',
      width: '100%',
      paddingTop: 40,
      paddingBottom: 20,
      
      },

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 60,
},

inputcontainer:{
width: '80%'
},
input: {
fontSize:15,
backgroundColor: 'white',
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 5,
marginTop: 15,
height: 60,
borderBottomWidth: 1,
borderBottomColor: '#757575',
},

buttonContainer:{
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50,
  marginBottom:20, 
  
  },
  

  button: {
      backgroundColor: '#3357A0',
      width: '100%',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      },
      

buttonOutline: {
  backgroundColor: 'white',
  marginTop: 5, 
  borderColor: '#3357A0',
  borderWidth: 1,
  },
  
buttonOutlineText: {
color: '#c908bd',
fontWeight: '700',
fontSize: 16,
},

buttonText: {
  color: 'white',
  fontWeight: '700',
  fontSize: 16,
},
  

hide: {
  display: 'none',
 
}



});
