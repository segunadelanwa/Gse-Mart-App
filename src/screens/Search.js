import React, { useState, useEffect,Fragment } from 'react';
import {TextInput,StyleSheet,TouchableOpacity, View,Text,Modal,FlatList, SafeAreaView,ActivityIndicator, Linking} from 'react-native';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { SearchBar,  } from 'react-native-elements';

export default function Search({ Search }) {
const [search, setSearch] = useState('');
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);
const[isLoading, setIsLoading] = useState(false); 
const[geterror, setGeterror] = useState(false); 

useEffect(() => {
        
        fetch('https://gse-mart.com/call_api.php?action=search')
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
          })
          .catch((error) => {
            setGeterror(true);
          });


      }, []);


      ReLoadHanduler =() =>{

        setGeterror(false); 
  
  
        fetch('https://gse-mart.com/call_api.php?action=search')
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
          })
          .catch((error) => {
            setGeterror(true);
          });
  
      }     
    
      const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.label2 
              ? item.label2 
              : '' ;
            const textData = text ;
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    
      const ItemView = ({ item }) => {
        return (
          // Flat List Item  {item.label2.toUpperCase()} 
          <Text style={styles.itemStyle}   onPress={() => Linking.openURL('https://gse-mart.com/'+item.username)}>
            {item.id}
            { <MaterialIcons name="search"  color={'#777777'} size={20} />}
            {item.label2  }
            { <AntDesign name="right"  color={'#777777'} size={20} />}
          </Text>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    


          return ( 

          <View style={styles.container} >

          <SearchBar 
          inputContainerStyle={{backgroundColor: 'white'}}
          leftIconContainerStyle={{backgroundColor: 'white'}}
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{
          backgroundColor: '#3357A0',
          justifyContent: 'space-around',
          borderTopWidth:0,
          borderBottomWidth:0,}}

          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}

          />                 


          {isLoading?

            !geterror?
                       <View style={styles.container1}>
                    
                                  <View> 
                                  <ActivityIndicator  size="large"   animating/>
                                  <Text>Loading</Text> 
                                  </View>  
                        
                        </View>
                        :
                                <View style={styles.container1}>
                                  
                                  <View style={{ alignItems: 'center',}}> 
                                  <AntDesign name="disconnect"  color={'#3357A0'} size={40} /> 
                                  
                                      <Text style={{fontSize: 16,marginTop: 20,}}>  Error Loading Search</Text>
                                      <Text style={{fontSize: 16,marginTop: 2,}}>Check Data Connection </Text>
                                  </View>        
                                
                                  <TouchableOpacity onPress={() => ReLoadHanduler()}
                                  style={{backgroundColor: 'white', padding: 10,borderRadius: 5,marginTop: 30}}
                                  >
                                  <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD APP </Text>
                                  </TouchableOpacity>
            
                                </View>
          :
          <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          style={{fontSize: 20,}}
          />

          }

          </View>  
          );



     
}

 
const styles = StyleSheet.create({

  container1: {
 
    paddingTop: 300,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingHorizontal: 0
  },
  container:
  {
         backgroundColor: 'white',
  },
  itemStyle: {
  padding: 10,
  fontSize: 16,

  },


       
       
    
        })


        // if(isLoading){
  
        //   if(!geterror)
        //   {  
        //         return(
        //               <View style={styles.container1}>
                    
        //                       <View> 
        //                       <ActivityIndicator  size="large"   animating/>
        //                       <Text>Loading</Text> 
        //                       </View>  
                    
        //             </View>
        //             )
        //   }
        //   else
        //   {
        //             return(
        //                   <View style={styles.container1}>
                          
        //                   <View style={{ alignItems: 'center',}}> 
        //                   <AntDesign name="disconnect"  color={'#3357A0'} size={40} /> 
                          
        //                       <Text style={{fontSize: 16,marginTop: 20,}}>  Error Loading Search</Text>
        //                       <Text style={{fontSize: 16,marginTop: 2,}}>Check Data Connection </Text>
        //                   </View>        
                        
        //                   <TouchableOpacity onPress={() => ReLoadHanduler()}
        //                   style={{backgroundColor: 'white', padding: 10,borderRadius: 5,marginTop: 30}}
        //                   >
        //                   <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD APP </Text>
        //                   </TouchableOpacity>
    
        //                 </View>
        //                 )
        //   }
      
        // }
        // else
        // {