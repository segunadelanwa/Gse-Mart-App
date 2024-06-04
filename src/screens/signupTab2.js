import React, { useState, useEffect} from 'react'; 
import { AppRegistry } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';
import {ActivityIndicator, Alert, ScrollView, KeyboardAvoidingView, StyleSheet, Text,
   TextInput, TouchableOpacity, View,Linking } from 'react-native'

export const selectValidator = (value) => {
  if (!value || value.length <= 0) {
    return 'Please select a value.';
  }

  return '';
};

 




export default function SignupTab1({ navigation }) {
  const[isLoading, setIsLoading] = useState(false); 
  const[geterror, setGeterror] = useState(false); 
  
  
const [gender, setGender] = useState({
  value: '',
  list: [
    { _id: '1', value: 'MALE' },
    { _id: '2', value: 'FEMALE' },
    { _id: '3', value: 'OTHERS' },
  ],
  selectedList: [],
  error: '',
});



 const[formData, setFormData] = useState({
           
      
      firstname:'', 
      surname:'', 
      officeAddress:'',  
      phone:'', 
      officeTown:'', 
      state:'', 
      country:'',      
      password_2:'', 
      password: '',
      email: '',
 });
 
 
 
 
 
 ReLoadHanduler =() =>{

  setIsLoading(false);
  setGeterror(false);

}     




const InserRecord = () => {
  setIsLoading(true);       
    var user_gender      = gender.value;              
    var user_firstname   = formData.firstname;       
    var user_surname     = formData.surname;       
    var user_offAddr     = formData.officeAddress;       
    var user_phone       = formData.phone;       
    var user_officeTown  = formData.officeTown;       
    var user_state       = formData.state;       
    var user_country     = formData.country;          
    var user_password_2  = formData.password_2;       
    var user_password    = formData.password;       
    var user_email       = formData.email;       

 
    if(
      user_email == ''||    
      user_officeTown == ''||    
      user_phone == ''||        
      user_country == ''||  
      user_state == ''||  
      user_offAddr == ''||  
      user_surname == ''||  
      user_gender == ''||  
      user_firstname ==''  
    ){
   
        Alert.alert('OOPS!', "All fields are required",[
            {text: 'Please Try Again', onPress: () => console.log('alert close')}

        ]);

    }
    else if( user_password !== user_password_2 )
    {
      setIsLoading(false); 
        Alert.alert('OOPS!', "Your Password did not match",[
            {text: 'Please Try Again', onPress: () => console.log('alert close')}

        ]);

    }
  else
   {

 
           
            var InsertAPIURL = "https://gse-mart.com/call_api.php?action=marketer_api";
            var headers = {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
            var Data = {
                    
                con_user_gender: user_gender,   
                con_user_firstname: user_firstname,
                con_user_surname: user_surname,
                con_user_offAddr:user_offAddr,
                con_user_officeTown:user_officeTown,
                con_user_state:user_state,
                con_user_country:user_country,  
                con_user_phone:user_phone,
                con_user_password:user_password,
                con_user_email:user_email

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

                      setIsLoading(false); 
                           
                            Alert.alert('SUCCESS!', " Check your email for login details Your Marketer's Code is ->" + response[0].feedback2,[
                                {text: 'Okay', onPress: () => props.navigation.navigate("Renewsub")}
                            ]);

                    }else if(response[0].success == "Failed"){
                      setIsLoading(false); 
                      alert(response[0].feedback )
                    }
                


                    })
                .catch((error) => {

                 setGeterror(true);

                })
            

  
 
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
        <PaperProvider>
        <ScrollView>   
            <KeyboardAvoidingView style={styles.container} behavior="padding" >
    
          

                <View  style={styles.inputcontainer}>






                    <Text style={{ color: '#3357A0', fontSize: 20,marginTop: 20,marginBottom: 20, textAlign: 'center'}}> 
                  Affiliate Marketer Setup
                    </Text>




                
          

                <TextInput     
                onChangeText={text => setFormData({...formData, firstname: text })}
                  placeholder='Firstname' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default" 
                  />

                  <TextInput   
                  onChangeText={text => setFormData({...formData, surname: text })}
                  placeholder='Surname' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  />          

                  <TextInput    
                  onChangeText={text => setFormData({...formData, officeAddress: text })}
                  placeholder='Address' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  />          
    

                  
                <View style={{marginTop: 20,}}>
                      <PaperSelect
                      label="Gender" 
                      value={gender.value}
                      onSelection={(value) => {
                        setGender({
                          ...gender,
                          value: value.text,
                          selectedList: value.selectedList,
                          error: '',
                        });
                      }}
                      arrayList={[...gender.list]}
                      selectedArrayList={gender.selectedList}
                      errorText={gender.error}
                      multiEnable={false}
                      dialogTitleStyle={{ color: '#3357A0' }}
                      checkboxColor="black"
                      checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                      textInputMode="flat"
                      textInputColor="red"
                    />      
                </View>

                    
    


                    <TextInput    
                    onChangeText={text => setFormData({...formData, phone: text })}
                    marketerCode
                    placeholder='Phone No' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    />

                    <TextInput    
                    onChangeText={text => setFormData({...formData, officeTown: text })}
                    placeholder='Town' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="default"
                    
                    />          
      
                    <TextInput    
                    onChangeText={text => setFormData({...formData, state: text })}
                    placeholder='State' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="default"
                    
                    />          
      
                    <TextInput    
                    onChangeText={text => setFormData({...formData, country: text })}
                    placeholder='Country' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="default"
                    
                    />  

                    <TextInput    
                    onChangeText={text => setFormData({...formData, password: text })}
                    placeholder='Password' 
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    />

                    <TextInput    
                    onChangeText={text => setFormData({...formData, password_2: text })}
                    placeholder='Confirm Password' 
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                    
                    />

                    <TextInput    
                    onChangeText={text => setFormData({...formData, email: text })}
                    placeholder='Email ' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    />
    
        
                    <View  style={{color: 'white', marginTop: 50}}>
                    <Text style={{color: '#3357A0',fontSize: 16,fontWeight: '700', textDecorationLine:'underline'}}>Tearms & Conditions</Text>
                    <Text  style={{color: '#3357A0',fontSize: 14}}> On clicking Create Account button you agree to our terms and conditions.
                   
                      <TouchableOpacity  onPress={() => Linking.openURL('https://gse-mart.com/terms-&-policies.php')}  >
                      <Text style={{color: '#f00',fontSize: 14,textDecorationLine:'underline'}}> see terms and conditions here</Text>
                      </TouchableOpacity>   
                    </Text> 
                    </View>

          
                              <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                onPress={InserRecord}
                                style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Create Account</Text>
                                </TouchableOpacity> 
                            </View>         
                </View>

              



            
                



              
            </KeyboardAvoidingView>
        </ScrollView> 
        </PaperProvider> 
    );
 
                    }

}

//value: any
//https://callstack.github.io/react-native-paper/getting-started.html
//https://github.com/srivastavaanurag79/react-native-paper-select
/*
  return (
    <View style={styles.container}>
      <Headline style={{ marginBottom: 10 }}>
        React Native Paper Select
      </Headline>
      <PaperSelect
        label="Select Gender"
        value={gender.value}
        onSelection={(value: any) => {
          setGender({
            ...gender,
            value: value.text,
            selectedList: value.selectedList,
            error: '',
          });
        }}
        arrayList={[...gender.list]}
        selectedArrayList={gender.selectedList}
        errorText={gender.error}
        multiEnable={false}
        dialogTitleStyle={{ color: 'red' }}
        checkboxColor="yellow"
        checkboxLabelStyle={{ color: 'red', fontWeight: '700' }}
        textInputBackgroundColor="yellow"
        textInputColor="red"
      />
      <PaperSelect
        label="Select Colors"
        value={colors.value}
        onSelection={(value: any) => {
          setColors({
            ...colors,
            value: value.text,
            selectedList: value.selectedList,
            error: '',
          });
        }}
        arrayList={[...colors.list]}
        selectedArrayList={colors.selectedList}
        errorText={colors.error}
        multiEnable={true}
        textInputMode="flat"
        searchStyle={{ iconColor: 'red' }}
      />
*/
const styles = StyleSheet.create({
    header: {  
        flexDirection: 'row',
        backgroundColor: '#c908bd',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        
        },
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
    justifyContent: 'center',
    alignItems: 'center',
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
   
},

loading: {
  flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
},




});
