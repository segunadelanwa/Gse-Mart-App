import React, { useState, useEffect } from 'react';
import {  globalStyles } from '../globalComponents/global';
import {Entypo} from 'react-native-vector-icons/Entypo';
import {Feather} from 'react-native-vector-icons/Feather'; 
import {Image,TouchableOpacity, View, Text, Button, StyleSheet } from 'react-native'; 
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function  ProfileScreen({ navigation }){

const { signOut } = React.useContext(AuthContext);
const [username, setUsername] = useState('');
const [photo, setPhoto] = useState('');
const [surname, setSurname] = useState('');
const [firstname, setFirstname] = useState('');
const [gender, setGender] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setSState] = useState('');
const [country, setCountry] = useState('');
const [reg_date, setReg_date] = useState('');
const [bank_name, setBank_name] = useState('');
const [account_name, setAccount_name] = useState('');
const [account_number, setAccount_number] = useState(''); 



 
useEffect(() => 
{

 

 
     
      try{
        
        AsyncStorage.getItem('login_session')
        .then((value) => {
          const data = JSON.parse(value); 

          setUsername(data.username);
          setPhoto(data.photo);
          setSurname(data.surname);
          setFirstname(data.firstname);
          setGender(data.gender);
          setPhone(data.phone);
          setAddress(data.address);
          setCity(data.city);
          setSState(data.state);
          setCountry(data.country);
          setReg_date(data.reg_date);
          setBank_name(data.bank_name);
          setAccount_name(data.account_name); 
          setAccount_number(data.account_number);    
        });
         
    
      }
      catch(error){
    
        alert(error) 
   
    
    }

 
}, []);
            
      
 



    return (
      <View >
          

      <View style={globalStyles.header}>
      <Feather name="arrow-left" size={24}  style={{color: 'white', textAlign: 'center',width: '15%'}} 
      onPress={() => navigation.goBack()}

      />

      <Text style={{ fontWeight: '700', color: 'white', fontSize: 20, width: '85%',textAlign: 'center'}}> MY ACCOUNT PROFILE</Text>
     </View>
      

 

      

      <View style={styles.profileCon}>

          <View style={{  alignItems: 'center',   marginTop: 20, }}>
          <Text style={{fontSize:16, fontWeight: 'bold', }}>{username}</Text>
          <Image source={{ uri: "https://owambextra.com/images/placeholder.png"}} style={styles.BodyImage} />
        </View>


      <View style={{paddingLeft: 20,}}>

      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10, }}>Account  Names: <Text style={{color:'#c908bd', }}> {surname}  {firstname}</Text>    </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10, }}>Email Address:  <Text style={{color:'#c908bd', }}> {username} </Text> </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10, }}>Gender:  <Text style={{color:'#c908bd', }}> {gender}  </Text></Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10, }}>Phone:  <Text style={{color:'#c908bd', }}> {phone} </Text> </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10, }}>Address :  <Text style={{color:'#c908bd', }}> {address} </Text> </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> City: <Text style={{color:'#c908bd', }}> {city} </Text>  </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> State: <Text style={{color:'#c908bd', }}> {state}  </Text>  </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> Country:  <Text style={{color:'#c908bd', }}> {country}</Text>    </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> Register Date:  <Text style={{color:'#c908bd', }}>{reg_date} </Text>   </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> Bank Account Name: <Text style={{color:'#c908bd', }}>{account_name} </Text>    </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> Account Holder Name:<Text style={{color:'#c908bd', }}>{bank_name} </Text>     </Text>
      <Text style={{fontSize:16, fontWeight: '400', marginBottom:10,}}> Bank Account Number:  <Text style={{color:'#c908bd', }}>{account_number} </Text>    </Text>
    
      </View>




 




        <View style={{alignItems: 'center',paddingTop:30,}}>
                <TouchableOpacity  style={[globalStyles.buttonAutowidth, globalStyles.buttonOutline]} >
              <Entypo name="log-out" size={24}  color="#c908bd" style={{  textAlign: 'center'}}   onPress={signOut} />
              <Text>Log Out</Text>          
              </TouchableOpacity>
          
        </View> 


      </View>




 

   




  

      



        </View>

      );
  };

 

const styles = StyleSheet.create({

 
  BodyImage: {
   
    marginTop: 30,
    marginBottom: 20,
    width: 60, 
    height: 60, 
},
profileCon: {
width: '100%',   
backgroundColor: 'white',
marginTop: -20, 
paddingBottom: 20,
},

 
});

