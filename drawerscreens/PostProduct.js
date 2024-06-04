import React, { useState, useEffect} from 'react';  
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';
import Img from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar'; 
import ImagePicker from 'react-native-image-crop-picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, Image,
    TouchableHighlight, TouchableOpacity, View,ActivityIndicator } from 'react-native'


export default function PostProduct({ navigation }) {

    const[isLoading, setIsLoading] = useState(false); 
    const[geterror, setGeterror] = useState(false);   
    const[loginData, setLoginData] = useState([]);  
    const[image1, setImage1] = useState([]);    
    const[image2, setImage2] = useState([]);    
    const[image3, setImage3] = useState([]);   

    const[formData, setFormData] = useState({
            
        productName:'', 
        productPrice:'',  
        productSearch:'', 
        productDetails:'' 
   });
   
       

  
 

useEffect(() => {
 
        
        try{
        
            AsyncStorage.getItem('login_session')
            .then((value) => {
            const data = JSON.parse(value); 

            setLoginData(data); 
    
    
        });
            
    
        }
        catch(error){
    
            setGeterror(true);  
    
        }

    
}, []);
 
 


 
PagereloadHandler = () => {
 
    
    setIsLoading(true);
            
            
    var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=fingerPrintlogin&user="+loginData.username
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
            
        
                setIsLoading(false);
                    
                
            
            })
            .catch(error => {
                setGeterror(true);
            });

    ///////////////////////////////////////////////////////////////////////////////////




  

 }   



const uploadPhoto = async () =>{

    setIsLoading(true);





       
             if(image1.path == null  ){
          
           
     
        setIsLoading(false);
    
        alert('NOTE!:  You must select photo 1 to upload to website');


      }else  if(image1.path == null && image2.path == null && image3.path == null ){
          
           
     
         setIsLoading(false);
     
         alert('ERROR!  Please select an image');
     
     
         
      }else  if(image1.path != null && image2.path == null && image3.path == null ){
     
        // alert('Okay!  1 IMAGE'); 
        let formDataPost = new FormData();
        for (let p in formData )
         formDataPost.append(p, formData[p]);
     
         formDataPost.append('photo1',{
             uri: image1.path,
             type:image1.mime,
             name: 'load-photo1'
            }); 



            try {
                await fetch( 
                    "https://gse-mart.com/call_api.php?action=websiteload&user="+loginData.username+"&vendor="+loginData.reg_type,
                   {
                     method: "POST",
                     headers:{
                         Accept: "application/json",
                         "Content-Type": "multipart/form-data"
                     },
        
                     body: formDataPost
        
                   }
        
                )
                .then((response) => response.json()) 
                .then((response) => {
                setIsLoading(false);
                
        
                       if(response[0].success == "ok")
                       { 
        
        
        
                            Alert.alert('SUCCESS!', response[0].feedback2,[
                            
                            {text: 'Okay', onPress: () =>  { navigation.navigate('Viewpost') }}
                            ]);
                            PagereloadHandler();
                       }
                       else if(response[0].success == "Failed")
                       {
        
                             alert(response[0].feedback )
        
                       }
        
                }) 
                .catch((error) => {
        
                    setGeterror(true);
        
                })
        
        
           }
           catch(error){
         
            console.log(error);
           setGeterror(true);
            }


            setImage1([]);
            setImage2([]);
            setImage3([]);
             
      }else  if(image1.path != null && image2.path != null && image3.path == null ){
        
     
         //alert('Okay! 2 IMAGES');
     
        
        let formDataPost = new FormData();    
        for (let p in formData )
         formDataPost.append(p, formData[p]);
   
     
      
         formDataPost.append('photo1',{
             uri: image1.path,
             type:image1.mime,
             name: 'load-photo1'
            });
     
            formDataPost.append('photo2',{
             uri: image2.path,
             type:image2.mime,
             name: 'load-photo2'
             }); 

             try {
                await fetch( 
                    "https://gse-mart.com/call_api.php?action=websiteload&user="+loginData.username+"&vendor="+loginData.reg_type,
                   {
                     method: "POST",
                     headers:{
                         Accept: "application/json",
                         "Content-Type": "multipart/form-data"
                     },
        
                     body: formDataPost
        
                   }
        
                )
                .then((response) => response.json()) 
                .then((response) => {
                setIsLoading(false);
                
        
                       if(response[0].success == "ok")
                       { 
        
        
        
                            Alert.alert('SUCCESS!', response[0].feedback2,[
                            
                            {text: 'Okay', onPress: () =>  { navigation.navigate('Viewpost') }}
                            ]);
                            PagereloadHandler();
                       }
                       else if(response[0].success == "Failed")
                       {
        
                             alert(response[0].feedback )
        
                       }
        
                }) 
                .catch((error) => {
        
                    setGeterror(true);
        
                })
        
        
           }
           catch(error){
         
            console.log(error);
           setGeterror(true);
            }


            setImage1([]);
            setImage2([]);
            setImage3([]);
             
      }else  if(image1.path != null && image2.path != null && image3.path != null ){
     
     
        // alert('Okay!  3 IMAGES');
      
        let formDataPost = new FormData();    
        for (let p in formData )
         formDataPost.append(p, formData[p]);
         
         
         formDataPost.append('photo1',{
             uri: image1.path,
             type:image1.mime,
             name: 'load-photo1'
            });
     
     
            formDataPost.append('photo2',{
             uri: image2.path,
             type:image2.mime,
             name: 'load-photo2'
             });
     
         
             formDataPost.append('photo3',{
                 uri: image3.path,
                 type:image3.mime,
                 name: 'load-photo3'
             });
              

             try {
                await fetch( 
                    "https://gse-mart.com/call_api.php?action=websiteload&user="+loginData.username+"&vendor="+loginData.reg_type,
                   {
                     method: "POST",
                     headers:{
                         Accept: "application/json",
                         "Content-Type": "multipart/form-data"
                     },
        
                     body: formDataPost
        
                   }
        
                )
                .then((response) => response.json()) 
                .then((response) => {
                setIsLoading(false);
                
        
                       if(response[0].success == "ok")
                       { 
        
        
        
                            Alert.alert('SUCCESS!', response[0].feedback2,[
                            
                            {text: 'Okay', onPress: () =>  { navigation.navigate('Viewpost') }}
                            ]);
                            PagereloadHandler();
                       }
                       else if(response[0].success == "Failed")
                       {
        
                             alert(response[0].feedback )
        
                       }
        
                }) 
                .catch((error) => {
        
                    setGeterror(true);
        
                })
        
        
           }
           catch(error){
         
            console.log(error);
           setGeterror(true);
            }


            setImage1([]);
            setImage2([]);
            setImage3([]);

      }else  if(image1.path != null && image2.path == null && image3.path != null ){
     
     
    // alert('Okay!  2 IMAGES');
  
    let formDataPost = new FormData();    
    for (let p in formData )
     formDataPost.append(p, formData[p]);
     
     
     formDataPost.append('photo1',{
         uri: image1.path,
         type:image1.mime,
         name: 'load-photo1'
        });
 
 
 
     
         formDataPost.append('photo3',{
             uri: image3.path,
             type:image3.mime,
             name: 'load-photo3'
         });
          

         try {
            await fetch( 
                "https://gse-mart.com/call_api.php?action=websiteload&user="+loginData.username+"&vendor="+loginData.reg_type,
               {
                 method: "POST",
                 headers:{
                     Accept: "application/json",
                     "Content-Type": "multipart/form-data"
                 },
    
                 body: formDataPost
    
               }
    
            )
            .then((response) => response.json()) 
            .then((response) => {
            setIsLoading(false);
            
    
                   if(response[0].success == "ok")
                   { 
    
    
    
                        Alert.alert('SUCCESS!', response[0].feedback2,[
                        
                        {text: 'Okay', onPress: () =>  { navigation.navigate('Viewpost') }}
                        ]);

                        PagereloadHandler();
                       
                   }
                   else if(response[0].success == "Failed")
                   {
    
                         alert(response[0].feedback )
    
                   }
    
            }) 
            .catch((error) => {
    
                setGeterror(true);
    
            })
    
    
       }
       catch(error){
     
        console.log(error);
       setGeterror(true);
        }

        setImage1([]);
        setImage2([]);
        setImage3([]);
  }
  
  



}

const openGallery1 = () =>{


    ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true,
    }).then(image => {
         
        setImage1(image);

    })

}
 
const openGallery2 = () =>{


    ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true,
    }).then(image => {

        setImage2(image);

    })

}

const openGallery3 = () =>{


    ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true,
    }).then(image => {

        setImage3(image);

    })

}


    const image1Url = image1.path? { uri: image1.path}
    :require('../assets/noimg.png') 


    const image2Url = image2.path? { uri: image2.path}
    :require('../assets/noimg.png') 


    const image3Url = image3.path? { uri: image3.path}
    :require('../assets/noimg.png') 

if(isLoading)
{

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
    
        

            {
                loginData.reg_type == 'vendor'?
 
                  <View  style={styles.inputcontainer}>






                    <Text style={{ color: '#3357A0', fontSize: 25,marginTop: 20,marginBottom: 20, textAlign: 'center'}}> 
                       VENDOR UPOAD  
                    </Text>




                <View style={ {marginBottom: 50, width: '80%'}}>

                    <TouchableOpacity onPress={openGallery1}  >
                        <Img 
                        source={image1Url} 
                        indicator={ProgressBar} 
                        style={{  height: 100,  marginLeft: '35%' }}
                        />
                      
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, textAlign: 'center'}}> Select Photo 1</Text>
                </View>



                <View style={ {  marginLeft: '1%',flexDirection: 'row'}}>
                   
                    <View style={{width: '40%',marginRight: '15%',marginLeft: '5%'}}>
                        <TouchableOpacity onPress={openGallery2}>
                            <Img 
                            source={image2Url} 
                            indicator={ProgressBar} 
                            style={{  height: 100 }}/>
                        
                        </TouchableOpacity>               
                    </View>


                    <View style={{width: '40%'}}>
                        <TouchableOpacity onPress={openGallery3}>
                        <Img 
                        source={image3Url} 
                        indicator={ProgressBar} 
                        style={{   height: 100 }}/>
                    
                    </TouchableOpacity>               
                    </View>
                
                </View>

               <Text style={{fontSize: 20,textAlign:'center',marginBottom: 50,}}> Select Other Photos</Text>
      

        
    

    

                    
    


                    <TextInput    
                    onChangeText={text => setFormData({...formData, productName: text })}
                    marketerCode
                    placeholder='PRODUCT NAME' 
                    style={styles.input}
                    autoCapitalize="none" 
                    />

                    <TextInput    
                    onChangeText={text => setFormData({...formData, productPrice: text })}
                    placeholder='PRODUCT PRICE' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    
                    /> 
                   
                    <View style={{marginTop: 20}}>
                    
                    <Text>How do you want this post to be search</Text>
                    <TextInput    
                    onChangeText={text => setFormData({...formData, productSearch: text })}
                    placeholder='Search Name' 
                    style={styles.input}
                    autoCapitalize="none" 
                    
                    />                     
                    </View>


                    <View style={{marginTop: 20}}>
                    
                    <Text>Details about this post</Text>
                    <TextInput
                    multiline
                    numberOfLines={4} 
                    onChangeText={text => setFormData({...formData, productDetails: text })}
                    placeholder='Provide details about your products or goods' 
                    style={[styles.input, {height:100,paddingTop: -250,}]}
                    autoCapitalize="none"
                    keyboardType="default"
                  
                    
                    />                     
                    </View>
         
    
                    
        


        
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                onPress={uploadPhoto}
                                style={styles.button}
                                >
                                    <Text style={styles.buttonText}>UPLOAD TO WEBSITE</Text>
                                </TouchableOpacity> 
                            </View>         
                   </View>

            : 
                    <View  style={styles.inputcontainer}>






                    <Text style={{ color: '#3357A0', fontSize: 25,marginTop: 20,marginBottom: 20, textAlign: 'center'}}> 
                    VENDOR UPOAD  
                    </Text>




                <View style={ {marginBottom: 50, width: '80%'}}>

                    <TouchableHighlight onPress={openGallery1}  >
                        <Img 
                        source={image1Url} 
                        indicator={ProgressBar} 
                        style={{  height: 100,  marginLeft: '35%' }}
                        />
                    
                    </TouchableHighlight>
                    <Text style={{fontSize: 20, textAlign: 'center'}}> Select Photo</Text>
                </View>



                <View style={ {  marginLeft: '1%',flexDirection: 'row'}}>
                
                    <View style={{width: '40%',marginRight: '15%',marginLeft: '5%'}}>
                        <TouchableHighlight onPress={openGallery2}>
                            <Img 
                            source={image2Url} 
                            indicator={ProgressBar} 
                            style={{  height: 100 }}/>
                        
                        </TouchableHighlight>               
                    </View>


                    <View style={{width: '40%'}}>
                        <TouchableHighlight onPress={openGallery3}>
                        <Img 
                        source={image3Url} 
                        indicator={ProgressBar} 
                        style={{   height: 100 }}/>
                    
                    </TouchableHighlight>               
                    </View>
                
                </View>

            <Text style={{fontSize: 20,textAlign:'center',marginBottom: 50,}}> Select Other Photos</Text>







                    



                    <TextInput    
                    onChangeText={text => setFormData({...formData, productName: text })}
                    marketerCode
                    placeholder='Headings' 
                    style={styles.input}
                    autoCapitalize="none" 
                    />

        
                
                    <View style={{marginTop: 20}}>
                    
                    <Text>How do you want this post to be search</Text>
                    <TextInput    
                    onChangeText={text => setFormData({...formData, productSearch: text })}
                    placeholder='Search Name' 
                    style={styles.input}
                    autoCapitalize="none" 
                    
                    />                     
                    </View>


                    <View style={{marginTop: 20}}>
                    
                    <Text>Details about this post</Text>
                    <TextInput
                    multiline
                    numberOfLines={4} 
                    onChangeText={text => setFormData({...formData, productDetails: text })}
                    placeholder='Provide details about your products or goods' 
                    style={[styles.input, {height:100,paddingTop: -250,}]}
                    autoCapitalize="none"
                    
                
                    
                    />                     
                    </View>
        

                    




                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                onPress={uploadPhoto}
                                style={styles.button}
                                >
                                    <Text style={styles.buttonText}>UPLOAD TO WEBSITE</Text>
                                </TouchableOpacity> 
                            </View>         
                    </View>
            }

            
                



            
            </KeyboardAvoidingView>
        </ScrollView> 
        </PaperProvider> 
    );
    
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
