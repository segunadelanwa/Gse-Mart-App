import React, { useState, useEffect } from 'react'; 
import {  Keyboard,Alert,KeyboardAvoidingView,TextInput,Image, View,Text,Modal,StyleSheet,
    TouchableOpacity, Dimensions, ScrollView,ActivityIndicator,ImageBackground } 
from 'react-native'; 
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';  
import { AuthContext } from '../../components/context';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PasswordReset from './PasswordReset';
import TouchID from 'react-native-touch-id';




var optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#3357A0', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

 
export default function ModalLogin({ navigation }) {
    const[passReset, setPassReset] = useState(false); 
    const[isLoading, setIsLoading] = useState(false); 
    const[geterror, setGeterror] = useState(false); 
    const[fingerPrintLogin, setFingerPrintLogin] = useState('null');
    const[data, setData] = useState({
       email: '',
       password: '',
       check_textInputChange: false,
       secureTextEntry: true 
    });
 
    const { signIn } = React.useContext(AuthContext);

const passwordResethandleR = () => {
    setPassReset(true);

}
    

const textInputChange = (val) => {
    if(val.length != 0) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true
        });
    }else{
    setData({
        ...data,
        email: val,
        check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {

    setData({
        ...data,
        password: val 
    });

}


const updateSecureTextEntry = () => {
setData({
    ...data, 
    secureTextEntry: !data.secureTextEntry
    });

}


ReLoadHanduler =() =>{

    setIsLoading(false);
    setGeterror(false);

  }     

 
 const InserRecord = () => {
  
    setIsLoading(true);
    var user_name = data.email;
    var pass_word = data.password;
  
  
   
    if(user_name == '' || pass_word == '' )
    {
        setIsLoading(false);

        
          Alert.alert('OOPS!', "Username Or Password  Field Is Missing",[
              {text: 'Please Try Again'}

          ]);

        
          
    }
    else
    {

 
       setIsLoading(true);
          
           
           var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=login";
            var headers = {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
            var userData = {
                username:user_name,
                password:pass_word
            };

            fetch(InsertAPIURL,
                {
                method:'POST',
                header:headers,
                body: JSON.stringify(userData)

               
        
                })
                .then((response) => response.json())
                .then((response) => {
        
                        
                    setIsLoading(false);
                  if(response[0].success == "ok")
                  {
                        
                   
                     
                    var obj = {   
                      photo:  response[0].photo,
                      username: response[0].username,
                      password: response[0].password,
                      surname:  response[0].surname,
                      firstname: response[0].firstname,
                      facebook:  response[0].facebook,
                      gender:  response[0].gender,
                      register_date:  response[0].register_date,	
                      label:  response[0].label,
                      firmname: response[0].firm_name,
                      address: response[0].address,
                      question: response[0].question,
                      answer: response[0].answer,
                      storage: response[0].storage,
                      label2: response[0].label2,
                      year: response[0].year,
                      town: response[0].town,	
                      state: response[0].state,
                      country: response[0].country,
                      register: response[0].register_date,
                      website: response[0].website,
                      marketer_code: response[0].marketer_code,
                      email: response[0].email,
                      overview: response[0].overview,
                      sub_type: response[0].sub_type,
                      sub_start: response[0].sub_start,
                      sub_expire: response[0].sub_expire,
                      last_visit: response[0].last_visit,
                      visibility: response[0].visibility,
                      vission: response[0].vission,
                      mission: response[0].mission,
                      value: response[0].value,
                      intown_shipping: response[0].intown_shipping,
                      outtown_shipping: response[0].outtown_shipping,
                      reg_type: response[0].reg_type,
                      activity: response[0].activity,
                      post_list: response[0].post_list,
                      sub_amount: response[0].sub_amount
                   
                     };
                    
                     AsyncStorage.setItem('authUser', response[0].username);
                     AsyncStorage.setItem('login_session',JSON.stringify(obj));
                     AsyncStorage.setItem('authLogin', '1');
                    
                  
       
                    
            
                    signIn();

                  
                  
                
                          
                           
                    }
                    else
                    {

                       
                        Alert.alert('OOPS!', response[0].success,[
                            {text: 'Okay'}
              
                        ]);
                        
                    }
                


                    })
                .catch((error) => {

                    setGeterror(true);

                })
            

     Keyboard.dismiss();
 
    }

    
}

 
  

  getMyStringValue = async () => {
    try {
        const authUser = await AsyncStorage.getItem('authUser');
        if(authUser == null){

             

        }else{
            setFingerPrintLogin(authUser);
        }
        
      
    } catch(e) {
      // read error
    }
  
   
  
  }


const handleBiometric  = async () => {

  
    try {
        
        const authUser = await AsyncStorage.getItem('authUser');
    

          TouchID.isSupported()
         .then(biometryType =>  {
        
                if(biometryType === 'FaceID') 
                {

                 console.log('FaceID is supported.');
                 console.log(authUser);

             
             
                            
                    
                    
                                if (authUser == null) 
                                {
                        

                                        Alert.alert('FIRST LOGIN REQUIRED', "System have detected first time login. Please kindly login with your username and password",[
                                            {text: 'Try Again'}  ]);

                                    
                                }
                                else 
                                {

                                    

                                        TouchID.authenticate("Authenticate", optionalConfigObject)
                                        .then(success => {
                                        
                                        

                                    ////////////////////////////////////////////////////////////
                                    Alert.alert('Authenticated Successfully');    
                                    setIsLoading(true);
                                    
                                            
                                            
                                    var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=fingerPrintlogin&user="+authUser;
                                    var headers = {
                                                'Accept': 'application/json',
                                                'Content-type': 'application/json'
                                                }
                                    
                                    fetch(InsertAPIURL,
                                        {
                                        method:'GET',
                                        header:headers,
                                        
                                        })
                                        .then((response) => response.json())
                                        .then((response) => {


                                        
                                            if(response[0].success == "ok")
                                            {     
                                            

                                            

                                                    var obj = {   
                                            photo:  response[0].photo,
                                            username: response[0].username,
                                            password: response[0].password,
                                            surname:  response[0].surname,
                                            firstname: response[0].firstname,
                                            facebook:  response[0].facebook,
                                            gender:  response[0].gender,
                                            register_date:  response[0].register_date,	
                                            label:  response[0].label,
                                            firmname: response[0].firm_name,
                                            address: response[0].address,
                                            question: response[0].question,
                                            answer: response[0].answer,
                                            storage: response[0].storage,
                                            label2: response[0].label2,
                                            year: response[0].year,
                                            town: response[0].town,	
                                            state: response[0].state,
                                            country: response[0].country,
                                            register: response[0].register_date,
                                            website: response[0].website,
                                            marketer_code: response[0].marketer_code,
                                            email: response[0].email,
                                            overview: response[0].overview,
                                            sub_type: response[0].sub_type,
                                            sub_start: response[0].sub_start,
                                            sub_expire: response[0].sub_expire,
                                            last_visit: response[0].last_visit,
                                            visibility: response[0].visibility,
                                            vission: response[0].vission,
                                            mission: response[0].mission,
                                            value: response[0].value,
                                            intown_shipping: response[0].intown_shipping,
                                            outtown_shipping: response[0].outtown_shipping,
                                            reg_type: response[0].reg_type,
                                            activity: response[0].activity,
                                            post_list: response[0].post_list,
                                            sub_amount: response[0].sub_amount
                                            
                                                    };
                                            
                                                //console.log(obj);
                                                AsyncStorage.setItem('authUser', response[0].username);
                                                AsyncStorage.setItem('login_session',JSON.stringify(obj));
                                                AsyncStorage.setItem('authLogin', '1');
                                            
                                        
                                                    signIn();
                                                    // setIsLoading(false);
                                                }
                                                else
                                                {
                                            
                                            
                                                    Alert.alert('OOPS!', response[0].success,[
                                                    {text: 'Okay'}   ]);
                                                
                                                }
                                            
                                            })
                                            .catch(error => {
                                            setGeterror(true);
                                            });

                                    ///////////////////////////////////////////////////////////////////////////////////
                        


                    
                                        })
                                        .catch(error => {
                                            setGeterror(true);
                                        });
                                }
 
                } 
                else if(biometryType !== 'FaceID') 
                {
                 console.log('TouchID is supported.');
                 console.log(authUser);
                            
                    
                    
                                if (authUser == null) 
                                {
                        

                                        Alert.alert('FIRST LOGIN REQUIRED', "System have detected first time login. Please kindly login first with your username and password",[
                                            {text: 'Try Again'}  ]);

                                    
                                }
                                else 
                                {

                                    

                                        TouchID.authenticate("Authenticate", optionalConfigObject)
                                        .then(success => {
                                        
                                        

                                    ////////////////////////////////////////////////////////////
                                    Alert.alert('Authenticated Successfully');    
                                    setIsLoading(true);
                                    
                                            
                                            
                                    var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=fingerPrintlogin&user="+authUser;
                                    var headers = {
                                                'Accept': 'application/json',
                                                'Content-type': 'application/json'
                                                }
                                    
                                    fetch(InsertAPIURL,
                                        {
                                        method:'GET',
                                        header:headers,
                                        
                                        })
                                        .then((response) => response.json())
                                        .then((response) => {


                                        
                                            if(response[0].success == "ok")
                                            {     
                                            

                                            

                                                    var obj = {   
                                            photo:  response[0].photo,
                                            username: response[0].username,
                                            password: response[0].password,
                                            surname:  response[0].surname,
                                            firstname: response[0].firstname,
                                            facebook:  response[0].facebook,
                                            gender:  response[0].gender,
                                            register_date:  response[0].register_date,	
                                            label:  response[0].label,
                                            firmname: response[0].firm_name,
                                            address: response[0].address,
                                            question: response[0].question,
                                            answer: response[0].answer,
                                            storage: response[0].storage,
                                            label2: response[0].label2,
                                            year: response[0].year,
                                            town: response[0].town,	
                                            state: response[0].state,
                                            country: response[0].country,
                                            register: response[0].register_date,
                                            website: response[0].website,
                                            marketer_code: response[0].marketer_code,
                                            email: response[0].email,
                                            overview: response[0].overview,
                                            sub_type: response[0].sub_type,
                                            sub_start: response[0].sub_start,
                                            sub_expire: response[0].sub_expire,
                                            last_visit: response[0].last_visit,
                                            visibility: response[0].visibility,
                                            vission: response[0].vission,
                                            mission: response[0].mission,
                                            value: response[0].value,
                                            intown_shipping: response[0].intown_shipping,
                                            outtown_shipping: response[0].outtown_shipping,
                                            reg_type: response[0].reg_type,
                                            activity: response[0].activity,
                                            post_list: response[0].post_list,
                                            sub_amount: response[0].sub_amount
                                            
                                                    };
                                            
                                                //console.log(obj);
                                                AsyncStorage.setItem('login_session',JSON.stringify(obj));
                                                AsyncStorage.setItem('authLogin', '1');
                                            
                                        
                                                    signIn();
                                                    // setIsLoading(false);
                                                }
                                                else
                                                {
                                            
                                            
                                                    Alert.alert('OOPS!', response[0].success,[
                                                    {text: 'Okay'}   ]);
                                                
                                                }
                                            
                                            })
                                            .catch(error => {
                                            setGeterror(true);
                                            });

                                    ///////////////////////////////////////////////////////////////////////////////////
                        


                    
                                        })
                                        .catch(error => {
                                            setGeterror(true);
                                        });
                                }
                } 
    
                
        })
        .catch(error => {
           
            Alert.alert('DEVICE NOT SUPPORTED!', "System have detected  unsupported device . KIndly login   with your username and password",[
                {text: 'Try Again'}  ]); 
        });
 
      
}catch(e) {
     
    }
    
 
}



 if(isLoading){
  
    return(
        <View style={styles.container1}>
        <View > 
        
            { geterror?
            
              
       

                  <View style={{ alignItems: 'center'}}>
                  
                     <AntDesign name="disconnect"  color={'#3357A0'} size={40} />
                      <Text style={{fontSize: 16,marginTop: 20,}}>  Network  Error </Text>
                      <Text style={{fontSize: 16,marginTop: 2,}}>Check Data Connection </Text>
                       <TouchableOpacity 
                       onPress={() => ReLoadHanduler()}  
                        style={{backgroundColor: 'white', padding: 10,borderRadius: 5,marginTop: 10}}  >
                       <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD PAGE </Text>

                       </TouchableOpacity>

                 
                </View>  
                  :
                  <View style={{ alignItems: 'center'}}> 
                    <ActivityIndicator  size="large"   animating/>
                    <Text>Loading</Text> 
                  </View>  
                
            }

        </View>  
       </View>
    );


  }
  else
  {
  
   return (
    <ImageBackground  
    style={{        
    width: '100%',
    height: '100%', 
    flex: 1,}}    
    source={ require('../../assets/mobilebg.jpeg')}
    >
    <ScrollView style={styles.container}> 
     <KeyboardAvoidingView>
     
           <View style={styles.header}>
              
             <Image 
          
             source={require('../../assets/logo.png')}  
              square style={styles.InnerLogo}
             resizeMode="stretch"
             />
            <Text style={styles.headerText}>
                GSE-MART
               
            </Text>
           <Text style={styles.headerBody}>
               ..Giving Online visibilities to local traders and SME..
             </Text>
        </View>


        <View  style={styles.footer}  animation="fadeInUp"  >
                <Text style={styles.title}>Stay connected with us!  </Text>
                <Text style={styles.text}>Account Login  </Text>

               <Text style={styles.textContent}>User Login  </Text>
             <View style={styles.action}>
                       
                       
                         <FontAwesome    name="user-o"  color="#3357A0"  size={18}   />

                         <TextInput  
                         placeholder="Phone no"
                         keyboardType="numeric"
                         autoCapitalize="none"
                         style={styles.textInput}
                         onChangeText={(val) => textInputChange(val)}
                         />
                         
                         {data.check_textInputChange ?
                          <Animatable.View   animation="bounceIn"> 
                                <Feather  
                                name="check-circle"
                                color="#3357A0"
                                size={25}
                                /> 
                         </Animatable.View>
                         : null
                        }                   
             </View>
             <Text style={styles.textContent}>Password  </Text>

             <View style={styles.action}>
                       
                       
                       <FontAwesome    name="lock"  color="#3357A0" size={30}  />

                       <TextInput  
                       placeholder="Your Password"
                       secureTextEntry={data.secureTextEntry ? true : false}
                       autoCapitalize="none"
                       style={styles.textInput}
                       onChangeText={(val) => handlePasswordChange(val)}
                       />

                    <TouchableOpacity  
                    onPress={updateSecureTextEntry}
                    >
                    {data.secureTextEntry ?
                    
                    <Feather  
                    name="eye-off"
                    color="#3357A0"
                    size={20}
                    /> 
                    :
                    <Feather  
                    name="eye"
                    color="#3357A0"
                    size={20}
                    /> 
                }
                    </TouchableOpacity>               

                  </View>

                <TouchableOpacity  onPress={InserRecord} >

                    <View style={styles.formButton} >
                    <Text style={styles.formText}>LOGIN  </Text>
                    </View>
                    
                </TouchableOpacity>



          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{width:'49%',marginTop: 15}}>
                    <TouchableOpacity   onPress={ () => navigation.navigate("Signup")}  >
                    <Text style={styles.formText2}>SignUp  <FontAwesome name="globe"   color={'#3357A0'} size={15} /> </Text>
                    </TouchableOpacity>       
                </View>

                <View style={{width:'49%',marginTop: 15}}>
                    <TouchableOpacity  onPress={() => setPassReset(true)} >
                    <Text style={styles.formText2}>Forgot Password  ? </Text>
                    </TouchableOpacity>       
                </View>
    
          </View>

                <View style={{flexDirection: 'row',justifyContent: 'center'}}>


                        <View style={{width:'49%',marginTop: 50}}>
                            <TouchableOpacity     onPress={() => handleBiometric()}  >
                           
                            <Text  style={styles.formText2}>
                             <MaterialCommunityIcons name="fingerprint"   color={'#3357A0'} size={35} />
                            </Text>
                            <Text style={{fontSize: 12,textAlign: 'center'}}> TouchID   </Text>
                            </TouchableOpacity>       
                        </View>
        
            
                </View>

           </View>

    


           <Modal visible={passReset} animationType='fade' swipeDirection={['left','right' ]} >
           <View  style={{backgroundColor: '#3357A0',paddingTop:'5%',paddingLeft:'5%',}} >
           <AntDesign name="arrowleft"    size={34} color='white'  onPress={() => setPassReset(false)}     />
           </View>
     
           <PasswordReset   />
     
     
          
          
           </Modal>


 </KeyboardAvoidingView>

  </ScrollView>
   </ImageBackground>




        );
  }
}

 

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        paddingHorizontal: 0
      },

      container: {
        flex: 1, 
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
     paddingVertical: 20,
     paddingHorizontal: 30

    },
    
     
    InnerLogo: {
        height: 60,
        width: 60,   
    }, 

    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,

    },

    headerBody: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 5,
    },


    title: {
        color: '#3357A0',
        fontSize: 18,
        fontWeight: '600',
    },


    text: {
     color: 'grey',
     marginTop: 5
    },


    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'black',
        marginBottom:  1,
        fontSize: 15,
       },


    textContent: {
        color: 'black', 
        fontSize: 16,
        marginTop: 20
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
        textAlign: 'center',
        fontSize: 13,
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

    //https://github.com/kalontech/react-native-touch-id-android
    //https://github.com/naoufal/react-native-touch-id