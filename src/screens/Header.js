import React from 'react'; 
import {FlatList,StyleSheet, Image, View, Text,ActivityIndicator,TouchableOpacity } from 'react-native';

 

export default function Header() {
 
          return (

         

              <View style={styles.header}>

                <View style={{marginTop: 5,marginLeft: 20}}>
                 <Image source={require('../../assets/logo.png')}  style={styles.headerImg}  />
                </View>
               
                <View>

                         <View>
                              <Text style={styles.headerText}>  GSE-MART  </Text>
                         </View>
                    
                        <View>
                            <Text style={{ fontSize: 10,color: '#eee',width: '100%',fontWeight:'bold',marginLeft:'8%'}}>
                            ..Giving Online visibilities to local traders and SME..
                            </Text>                    
                        </View>
       
              

                        
                </View>

              </View>

 
       
    
          )
  
 
} 
 

const styles = StyleSheet.create({
     header: {
    marginTop: -5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#3357A0', 
    height: 80, 
    marginBottom:-15,
    paddingTop: 7,
    paddingLeft: '2%',
  },
 
  headerImg: {
  height: 50,
  width: 50, 
 
  },

  headerText: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 20,
  paddingTop: 5,
  marginLeft: '20%',
  },
  
  })