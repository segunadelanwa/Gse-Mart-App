import React, { useState, useEffect } from 'react';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground,View, Text, StyleSheet, StatusBar, TouchableOpacity,ScrollView, Image} from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
 


export default function ProfileScreen({ navigation }){
 
    const [loginData, setLoginData] = useState([]);  
    const [isDarkTheme, setIsDarkTheme] = useState(false); 



    useEffect(() => 
    {
    
     
    
     
         
          try{
            
             AsyncStorage.getItem('login_session')
            .then((value) => {
              const data = JSON.parse(value); 
    
              setLoginData(data); 
       
      
            });
             
        
          }
          catch(error){
        
            alert(error) 
       
        
        }
    
     
    }, []);
 
    
    return (
        <ScrollView > 
        <ImageBackground    style={{     width: '100%',   height: '100%',   flex: 1,}}      source={{uri:'https://gse-mart.com/img/mobilebg.jpeg'}}  >
        <View style={styles.container}>
           <View>
               <Text style={{color:'white',fontWeight: 'bold',fontSize: 26, textAlign: 'center', marginTop:50,marginBottom: 10}}> {loginData.firmname}    </Text>
           </View>
        
            <View style={{flexDirection: 'row', justifyContent: 'center',marginBottom:20, }}> 
                <Avatar.Image  
                    source={{
                    uri:'https://gse-mart.com/reg_users/'+loginData.username+'/'+loginData.photo
                    }}
                    size={170}
                />  
            
            </View>
            <Text style={[styles.text, {textAlign:'center'}]}>Regististered As {loginData.reg_type}   </Text>
            <View style={{fontWeight: 'bold',fontSize: 26, textAlign: 'center', }}>
            <Text style={styles.text}>Names: {loginData.surname} {loginData.firstname}   </Text>
            <Text style={styles.text}>Username: {loginData.username}    </Text>
            <Text style={styles.text}>Gender: {loginData.gender}    </Text>
            <Text style={styles.text}>Facebook link: https://www.facebook.com/{loginData.facebook}    </Text>
            <Text style={styles.text}>Category : {loginData.label}    </Text>
            <Text style={styles.text}>Sub Category : {loginData.label2}    </Text>
            <Text style={styles.text}>Address : {loginData.address}     </Text>
            <Text style={styles.text}>Town : {loginData.town}     </Text>
            <Text style={styles.text}>Lacation : {loginData.state}     </Text>
            <Text style={styles.text}>Country : {loginData.country}     </Text>
            <Text style={styles.text}>My Webiste URL :  https://www.gse-mart.com/{loginData.username}     </Text>
            <Text style={styles.text}>SubType :{loginData.sub_type}     </Text>
            <Text style={styles.text}>Sub Start :{loginData.sub_start}     </Text>
            <Text style={styles.text}>Sub Ends :{loginData.sub_expire}     </Text>
            <Text style={styles.text}>Marketer code :{loginData.marketer_code}     </Text>
            <Text style={styles.text}>Date Registered :{loginData.register_date}     </Text>

            <View style={styles.textCon}>
             <Text style={styles.textHead}> Mission</Text>
             <Text style={styles.text}>{loginData.mission} </Text>
            </View>

            <View  style={styles.textCon}>
             <Text style={styles.textHead}> Vission</Text>
             <Text style={styles.text}>{loginData.vission} </Text>
            </View>

            <View style={styles.textCon}>
             <Text style={styles.textHead}> Value</Text>
             <Text style={styles.text} >{loginData.value} </Text>
            </View>
            
           </View>



           <View style={{ backgroundColor: '#777777', padding: 15,}}>
           <Text style={[  {fontSize: 20,color:'white'}]}>Sub Amount :N{loginData.sub_amount}     </Text>
           </View>
        </View>
        </ImageBackground>
        </ScrollView> 
    )
}

 



const styles = StyleSheet.create({
    
    container: {  
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 


    },

    text: {  
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 5,
    color: 'black',
    backgroundColor: '#eee',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth:0.3,
    },

    textCon: {    
    },

    textHead: {   
    paddingLeft: 20,
    marginBottom: 5, 
    fontSize: 20,
    color: 'black'
    },


 
   });