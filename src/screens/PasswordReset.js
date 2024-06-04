import React, { useState, useEffect} from 'react'; 
import { AppRegistry } from 'react-native';
import { AntDesign } from 'react-native-vector-icons/AntDesign'; 
import Header from './Header';  
import {Alert, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native'

 



export default function PasswordReset({ props }) {
 

    const [textInputChange, setTextInputChange] = useState('');
    const[isLoading, setIsLoding] = useState(false); 



    const InserRecord = () => {

        setIsLoding(true);
        var user_name = textInputChange; 
      
      
       
        if(user_name == '' )
        {
             
              Alert.alert('OOPS!', "Username Field Is Missing",[
                  {text: 'Please Try Again'}
    
              ]);
    
             setIsLoding(false);
              
        }
        else
        {
    
     
           setIsLoding(true);
              
               
               var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=passreset";
                var headers = {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                            }
                var userData = {
                    username:user_name, 
                };
    
                fetch(InsertAPIURL,
                    {
                    method:'POST',
                    header:headers,
                    body: JSON.stringify(userData)
    
                   
            
                    })
                    .then((response) => response.json())
                    .then((response) => {
            
                            
                        setIsLoding(false);
                      if(response[0].success == "ok")
                      {
                            
                     
                        Alert.alert('PLEASE YOUR CHECK EMAIL', "Account recovery link has been sent to your " +response[0].feedback2,[
                            {text: 'Okay'}
                        ]);
    
                                
                               
                        }
                        else
                        {
    
                 
                                                 
                        Alert.alert('OOP!', response[0].feedback2,[
                            {text: 'Okay'}
                        ]);

                            setIsLoding(false);
                        }
                    
    
    
                        })
                    .catch((error) => {
    
                    alert("Error" +error);
    
                    })
                
    
        
     
        }
    
        
    }



    if(isLoading)
    {
       
        return(
          <View style={styles.loading}> 
          <Image    source={require('../../assets/loading1.gif')}  style={{ width: 150, height: 300 }} /> 
            <Text  style={{ textAlign: 'center',color:'#3357A0' }}> Loading ...</Text>
         </View>
        );
    
    }
    else
    {
        return ( 
            
                <View>
                        
                        
                        <View style={{marginTop: 100,  flexDirection: 'column', width: '80%',marginLeft: '10%'}}>
                        
                                 <Text style={{fontSize: 18}}> Account Password Reset</Text>

                        <View  style={styles.textInput}>
                        
                             <TextInput  
                        placeholder="Enter Phone-no" 
                        autoCapitalize="none" 
                        onChangeText={(val) => setTextInputChange(val)}
                        style={styles.input}
                        keyboardType="numeric"
                        />                   
                        </View>




                        <TouchableOpacity  onPress={InserRecord} >

                        <View style={styles.formButton} >
                        <Text style={styles.formText}>SEND RECOVERY LINK  </Text>
                        </View>
                        
                        </TouchableOpacity>               
                        
                        </View>

            </View>
        
            
        );


    }
}

//  <Image    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"}}  style={{ width: 150, height: 300 }} /> 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3357A0',
        
      
      },


    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:50,
    },
    
    footer: {
     flex: 2,
     backgroundColor: '#fff',
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     paddingVertical: 50,
     paddingHorizontal: 30

    },
    
     
    InnerLogo: {
        height: 80,
        width: 80,   
    }, 

    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,

    },

    headerBody: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
    },


    title: {
        color: '#3357A0',
        fontSize: 20,
        fontWeight: '600',
    },


    text: {
     color: 'grey',
     marginTop: 5
    },


    textInput: { 
        paddingLeft: 10,
        color: 'black',
        marginBottom:  20,
        fontSize: 15,
       },


       input: {
        fontSize:18,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        marginBottom:50,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#757575',
        },

    button: {
    alignItems: 'flex-end',
    marginTop: 30
    },

    signIn: {
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },


    formButton: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#3357A0',
    },

    formButton2: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderColor: '#3357A0',
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 20,
    },

    
    formText2: {
        color: '#3357A0',
        fontWeight: 'bold', 
        textAlign: 'center',
        fontSize: 18,
        },
    formText: {  
        color: '#fff',
        fontWeight: 'bold', 
        textAlign: 'center'
        },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#f2f2f2",
        paddingTop: 5,
        marginBottom: 20
    },

    loading: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'white',
     },
    })
