import React, { Component } from 'react';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, 
    TouchableOpacity, View,ActivityIndicator,TouchableHighlight,Picker,Text } from 'react-native'; 
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; 
import ImagePicker from 'react-native-image-crop-picker'; 
import { AuthContext }  from '../components/context';

 
  
export default class WebsiteLogo extends Component {
  
    constructor(props) {
      super(props);
    
      this.state = { 
          sourceUrl:[],
          loginData:[],

          formData:{
              name: "",
              jk: "",
              tgl_lahir: "",
              email: "",
              telp: "",
              pekerjaan: "",
          },

          isLoading: false,  
          geterror: false,
          

        };
    }
 
   
   
 
 PagereloadHandler = () => {
 
    
    this.setState({ 
        isLoading: true
        });
    
            
            
    var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=fingerPrintlogin&user="+this.state.loginData.username
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
            
                //AsyncStorage.removeItem('login_session');
                AsyncStorage.setItem('login_session',JSON.stringify(obj));
                AsyncStorage.setItem('authLogin', '1');
            
        
                this.setState({ 
                    isLoading: false
                    });
                    
                
            
            })
            .catch(error => {
            

            this.setState({ 
                geterror: true
                });
            });

    ///////////////////////////////////////////////////////////////////////////////////




  

 }   


UNSAFE_componentWillMount  = () => { 

    try{

 

        AsyncStorage.getItem('login_session') 
        .then((value) => {
        const parsed = JSON.parse(value); 

        //console.log(parsed);

        this.setState({ 
        loginData: parsed
        });



        });

    }
    catch(error){
  
      alert(error) 
     }

}
 


_uploadPhoto = async () =>{

 
      
     let formDataPost = new FormData();    
 
    formDataPost.append('photo_profile',{
        uri: this.state.sourceUrl.path,
        type:this.state.sourceUrl.mime,
        name: 'load-photo1'
       });

 

    this.setState({ 
        isLoading: true
        });
   
   // console.log(formDataPost);
    try {
         await fetch( 
             "https://gse-mart.com/call_api.php?action=logo_upload&user="+this.state.loginData.username,
            {
              method: "POST",
              headers:{
                  'Accept': "application/json",
                  "Content-Type": "multipart/form-data"
              },

              body:formDataPost

            }

         )
         .then((response) => response.json()) 
         .then((response) => {

           //alert(JSON.stringify(responseJson)); 

                if(response[0].success == "ok")
                { 
                Alert.alert('SUCCESS!', response[0].feedback2,[
                
                {text: 'Okay', onPress: () =>  {this.PagereloadHandler()}}
                ]);
                   
                
                

                }
                else if(response[0].success == "Failed")
                {

                    Alert.alert('ERROR!', response[0].feedback2,[
                        {text: 'Okay' }  ]);
                }



                this.setState({ 
                    isLoading: false
                    });
         })
         .catch(error => {
            

            this.setState({ 
                geterror: true
                });
            });
         

    }
    catch(error){
  
      alert(error) 
     }


} 
   
 
 

_openGallery = () =>{


    ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true,
    }).then(image => {
        //console.log(image);
        this.setState({ 
            sourceUrl: image
            });
    })

}


 

render(){
 //const{ nama,tgl_lahir,email,telp,pekerjaan}= this.state.formData;
 const avarata = this.state.sourceUrl.path? { uri: this.state.sourceUrl.path}
              :{ uri:'https://gse-mart.com/reg_users/'+this.state.loginData.username+'/'+this.state.loginData.photo }

 
      if(this.state.isLoading){
  
                return(
                    <View style={styles.container1}>
                    <View > 
                    
                        { this.state.geterror?
                        
                          
                   
            
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
                                <Text>App Loading </Text> 
                              </View>  
                            
                        }
            
                    </View>  
                   </View>
                );
            
            
        }
        else
        {
              
                return(
                    <PaperProvider>
                    <ScrollView>   
                        <KeyboardAvoidingView style={styles.container} behavior="padding" >
                
                                <View style={{justifyContent:'center', flexDirection: 'column', marginTop: 15,borderRadius:10, width: 150,   height: 150}}>

                                <TouchableOpacity  style={{borderRadius: 700,  width: 200,  height: 200 }} onPress={this._openGallery}>
                        
                    
                                <Image 
                                source={avarata} 
                                indicator={ProgressBar} 
                                style={{   width: 200,  height: 200 }}
                                />

                            </TouchableOpacity>
                        </View>    

                            <View  style={styles.inputcontainer}>

                    

                                        <TouchableOpacity onPress={this._openGallery}>
                                        <Text style={{ color: '#3357A0', fontSize: 20,marginTop: 50,marginBottom: 30, textAlign: 'center'}}> 
                                        Click to update logo 
                                        </Text> 
                                        </TouchableOpacity>
                    
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                            onPress={this._uploadPhoto}
                                            style={styles.button}
                                            >
                                                <Text style={styles.buttonText}>UPLOAD LOGO</Text>
                                            <Text>   </Text>
                                            </TouchableOpacity> 
                                        </View>         
                            </View>

                        



                        
                            



                        
                        </KeyboardAvoidingView>
                    </ScrollView> 
                    </PaperProvider> 
                );
    
    }

}
 
 
}
 
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
    marginTop: 100,
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
 
    
    },
    

    button: {
        backgroundColor: '#3357A0',
        width: '70%',
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


//https://github.com/ivpusic/react-native-image-crop-picker

    //C:\project\gsemartapp\android\app\build.gradle
    //  defaultConfig {vectorDrawables.useSupportLibrary = true}
//C:\project\gsemartapp\android\build.gradle  

    //maven { url 'https://maven.google.com' }/
    //maven { url 'https://www.jitpack.io' }  
//C:\project\gsemartapp\android\app\src\main\AndroidManifest.xml

    // <uses-permission android:name="android.permission.CAMERA"/>
    // <uses-feature android:name="android.hardware.camera" android:required="false" />
    // <uses-feature android:name="android.hardware.camera.front" android:required="false" />

//   <Image   source={{ uri:'https://gse-mart.com/reg_users/'+loginData.username+'/'+loginData.photo }} 
//   https://www.npmjs.com/package/react-native-image-progress
//https://github.com/oblador/react-native-image-progress

/////////////////////////////////////////////////////////////////
// https://www.npmjs.com/package/rn-fetch-blob
// https://github.com/react-native-image-picker/react-native-image-picker
// //////////////////////////////////////////////////////////
// https://effectussoftware.com/blog/react-native-image-picker




// if(isLoading)
// {

//     return(
//         <View style={styles.loading}>
//         <Image    source={require('../assets/loading1.gif')}  style={{ width: 150, height: 250 }} />
//           <Text  style={{ textAlign: 'center',color:'#3357A0' }}> Loading ...</Text>
//       </View>
//       );

// }
// else
// {