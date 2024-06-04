import React, { useState, useEffect } from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import {ImageBackground,Image,Alert, View,TouchableOpacity,Text,ScrollView,ActivityIndicator,
  KeyboardAvoidingView,StyleSheet,TextInput } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { AuthContext }  from '../components/context';
import { PaperSelect } from 'react-native-paper-select'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import  Header from '../src/screens/Header';

export default function RenewSub({navigation}) {
  const { signOut } = React.useContext(AuthContext); 
  const[isLoading, setIsLoading] = useState(false); 
  const[geterror, setGeterror] = useState(false); 
    const[username, setUsername] = useState('');
    const[bilingName, setBilingName] = useState('');
    const[email, setEmail] = useState(''); 
    const[paymentStatus, setPaymentStatus] = useState(false); 
    const[paymentActivate, setPaymentActivate] = useState(false);
    const [sub, setSub] = useState({
        value: '',
        list: [
          { _id: '1', value: '2500' },
          { _id: '2', value: '5000' }, 
          { _id: '3', value: '10000' }, 
        ],
        selectedList: [],
        error: '',
      });
      


 
      const ReLoadHanduler =() =>{

        setIsLoading(false);
        setGeterror(false);
      
      }     
      
 

const ActivateSub = () =>{
if(sub.value.length == '' || username.length == '' || email.length == ''){

 alert("All Fields Are Required For Payment");

}else{

  setIsLoading(true);
  var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=userCheck";
  var headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
  var userData = {
      username:username, 
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

          //setIsLoding(false);
                if(response[0].success == "ok")
                {
                      
                
                  setPaymentActivate(true);

                  
                  }
                  else
                  {

                  
                      Alert.alert('INVALID ACCOUNT!', response[0].feedback,[
                          {text: 'Okay'}
                      ]);
                      
                  }
      


          })
         .catch((error) => {

          setGeterror(true);
      })
  

   
}
    
   
}


const UpdateActivatedSub = (a, b, c, d) =>{

    if(a == 'success'){
    
      
      setIsLoading(true);
      var InsertAPIURL = "https://www.gse-mart.com/call_api.php?action=updatePayment";
      var headers = {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              }
      var userData = {
          username:b, 
          amount:c,
          payref:d,
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
                          
                      setPaymentStatus(true);
                      setPaymentActivate(false);
                      
                      }
                      else
                      {

 
                          Alert.alert('FAILED', response[0].feedback,[
                              {text: 'Okay'}
                          ]);

                          setPaymentStatus(false);
                          setPaymentActivate(false);
                          
                      }
          


              })
            .catch((error) => {

              setGeterror(true);

          })


    }else if(a == 'cancelled'){

      setPaymentActivate(false);
    
    }

}

if(paymentActivate){

    return(
        <View style={{ flex: 1 }}>
          <Paystack   
            paystackKey="pk_live_1be72b5f2f6b55eb42e62fdf38aada31dbe850aa"
            paystackSecretKey="sk_live_a1d641f6c1bd46c242e5d38cc00e5a1800f68b8c"
            amount={sub.value}
            billingEmail={email}
            billingMobile={username}
            billingName={bilingName}
            activityIndicatorColor="green"
            onCancel={(e) => {
              //  console.log(e);
              // {"status": "cancelled"}
            
                UpdateActivatedSub(e.status, username, sub.value);
            }}
            onSuccess={(res) => {
              // console.log(res);
            UpdateActivatedSub(res.status,  username, sub.value, res.transactionRef.reference);
            }}
            autoStart={paymentActivate}
          />
      </View>

    );


}
else
{

      if(paymentStatus)
      {

        return(
          <View style={styles.loading}>
          <Image    source={{uri:'https://gse-mart.com/img/mark.png'}}  style={{ width: 100, height: 100,marginBottom:20 }} />
          <Text style={{marginBottom:100,fontSize: 20, }}>Payment Accepted </Text>

          <TouchableOpacity  onPress={() => {signOut(0)}}  style={styles.button2}  >
            <Text style={styles.buttonText}>Goto Home</Text>
            </TouchableOpacity> 

        </View>
        );

      }
      else
      {

              if(isLoading){
        
                if(geterror)
                {  
                    return(
                        <View style={styles.container1}>
                        
                        <View style={{ alignItems: 'center',}}> 
                        <AntDesign name="disconnect"  color={'#3357A0'} size={40} /> 
                        
                            <Text style={{fontSize: 16,marginTop: 20,}}>Network  Error </Text>
                            <Text style={{fontSize: 16,marginTop: 2,}}>Check Data Connection </Text>
                        </View>        
                      
                        <TouchableOpacity onPress={() => ReLoadHanduler()}
                        style={{backgroundColor: 'white', padding: 10,borderRadius: 5,marginTop: 30}}
                        >
                        <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD APP </Text>
                        </TouchableOpacity>
            
                      </View>
                      )
                }
                else
                {
                      return(
                            <View style={styles.container1}>
                          
                                    <View> 
                                    <ActivityIndicator  size="large"   animating/>
                                    <Text>Loading</Text> 
                                    </View>  
                          
                          </View>
                          )
                }
      
        }
        else 
         {
                return (
            
                  <PaperProvider>
                    <ScrollView>   
                    <KeyboardAvoidingView style={styles.container} >
              
                    
                    <Header />
                    <View  style={styles.inputcontainer}>






                        <Text style={{  color: '#3357A0', fontSize: 20,marginTop: 40,marginBottom: 20, textAlign: 'center'}}> 
                        Subscription Payment
                        </Text>



              


                    <View style={{marginBottom: 20,marginTop: 20}}>  

                    <PaperSelect
                      label="Select Subscription Type" 
                      value={sub.value}
                      onSelection={(value) => {
                          setSub({
                          ...sub,
                          value: value.text,
                          selectedList: value.selectedList,
                          error: '',
                        });
                      }}
                      arrayList={[...sub.list]}
                      selectedArrayList={sub.selectedList}
                      errorText={sub.error}
                      multiEnable={false}
                      dialogTitleStyle={{ color: '#3357A0' }}
                      checkboxColor="black"
                      checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                      textInputMode="flat"
                      textInputColor="red"
                    />
                    </View>  

                    <TextInput    
                    onChangeText={text => setUsername(text)}
                    placeholder='Username' 
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    />


                    <TextInput    
                    onChangeText={text => setBilingName(text)}
                    placeholder='Billing FullName' 
                    style={styles.input}
                    autoCapitalize="none" 
                    />


                    <TextInput    
                    onChangeText={text => setEmail(text)}
                    placeholder='Email Address' 
                    style={styles.input}
                    autoCapitalize="none" 
                    />


                  

                          <View style={styles.buttonContainer}>
                          <TouchableOpacity  onPress={() => {ActivateSub()}}  style={styles.button}  >
                              <Text style={styles.buttonText}>Make Payment</Text>
                          </TouchableOpacity> 
                        </View>  

                    <View  style={{color: 'white',paddingBottom: 100}}>
                    <Text style={{color: '#3357A0',fontSize: 20,fontWeight: 'bold', textDecorationLine:'underline'}}>Subscription Gategories</Text>
                    <Text  style={{color: '#3357A0',fontSize: 14}}>Premium Space  NGN2,500.00 Storage   Space 10</Text>
                    <Text  style={{color: '#3357A0',fontSize: 14}}>Gold Space          NGN5,000.00   Storage Space 20</Text>
                    <Text  style={{color: '#3357A0',fontSize: 14}}>Diamond Space  NGN10,000.00 Storage Space 30</Text>
                    </View>


                  </View>
                  </KeyboardAvoidingView>
                  </ScrollView>  
                  </PaperProvider> 
                   
                );
        }

      }




}

}

 
 

// <TouchableOpacity onPress={() => {ActivateSub}}>
// <Text>Pay Now</Text>
// </TouchableOpacity>


//{
//   "data": {
//           "event": "successful", 

          // "transactionRef": {
          //   "message": "Approved", 
          //   "reference": "T643024367394502",
          //    "status": "success", 
          //    "trans": "1716274583", 
          //    "transaction": "1716274583",
          //     "trxref": "T643024367394502"
          //   }
//      },
//  "status": "success", 

//   "transactionRef": {
    //      "message": "Approved", 
    //      "reference": "T643024367394502",
    //       "status": "success", 
    //       "trans": "1716274583",
    //        "transaction": "1716274583", 
    //        "trxref": "T643024367394502"
    //       }
//}  
//07080492155  ziggyadex@gmail.com
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
borderBottomColor: '#757575'
},
 
buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom:20, 
    
    },
    

    button2: {
        backgroundColor: '#3357A0',
        width: '50%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
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


})
