import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text,SafeAreaView, Image,StyleSheet,ImageBackground,StatusBar } from 'react-native'; 

export default function Loading() {
  return (
    <ImageBackground style={styles.imgBackground } source={require('../../assets/mobilebg.jpeg')}  >
 
    <StatusBar barStyle='#3357A0' backgroundColor='#3357A0' />

 

       <View style={styles.header} >  
     
        <Animatable.Image animation="slideInDown" iterationCount={5} direction="alternate" source={require('../../assets/logo.png')}  style={{alignContent: 'center', width: 60, height: 60, marginBottom: 10,}} />
        <Animatable.Text  animation="zoomInDown" style={{ fontWeight: 'bold',textAlign: 'center',fontSize: 20,color:'white',marginBottom: 20, }}>WELCOME TO GSE-MART</Animatable.Text> 
        <Animatable.Text animation="slideInDown"  style={{ textAlign: 'center',fontSize: 12,color:'white' }}> ..Giving Online visibilities to local traders and SME..</Animatable.Text> 
   


    <View style={styles.lowbody}>
        
   
        <Animatable.Text animation="zoomInUp"  style={{ fontWeight: 'bold', fontSize: 15,color:'white'  }}> BUY - </Animatable.Text>  
        <Animatable.Text animation="flipInY"  style={{ fontWeight: 'bold', fontSize: 15,color:'white'  }}> SELL -   </Animatable.Text>  
        <Animatable.Text animation="slideInDown"  style={{ fontWeight: 'bold', fontSize: 15,color:'white'  }}> OWN A WEBSITE </Animatable.Text>  
    </View>
     </View>
  
  
  
   
</ImageBackground>  
  );
}

//  <Image  source={require('../../assets/loading3.gif')}   style={{ width: 150, height: 150 }} />
const styles = StyleSheet.create({
    header: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         
     },
    
     lowbody: {
         marginTop: 100,
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center'
     },
    
     imgBackground: {
        width: '100%',
        height: '100%', 
        flex: 1,
        },
 
 
 
 })