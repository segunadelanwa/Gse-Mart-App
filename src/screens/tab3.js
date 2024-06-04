import React, { useState, useEffect} from 'react';
import {FlatList,Modal,StyleSheet, Image, View, Text,ActivityIndicator,TouchableOpacity,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import PostDetails from '../allModal/PostDetails';
import Loading2 from './Loading2'; 

 

export default function  Tab2 () {

  
 const[isLoading, setIsLoading] = useState(true); 
 const[dataSource, setDataSource] = useState([]); 
 const[postvalueDetails, setPostvalueDetails] = useState(false); 
 const[postId, setPostId] = useState(''); 
 const[postImg2, setPostImg2] = useState(''); 
 const[postImg3, setPostImg3] = useState(''); 
 const[postImg4, setPostImg4] = useState(''); 
 const[postFirm_name, setPostFirm_name] = useState(''); 
 const[postproduct_name, setPostproduct_name] = useState(''); 
 const[postprice, setPostprice] = useState(''); 
 const[postusername, setPostusername] = useState(''); 
 const[posttown, setPosttown] = useState(''); 
 const[postorder_status, setPostorder_status] = useState(''); 
 const[posttextarea, setPosttextarea] = useState(''); 
 const[geterror, setGeterror] = useState(false); 
 
   

const PostDetailsHanduler = (a,b,c,d,e,f,g,h,i,j,k) => {
 
 setPostvalueDetails(true);

 setPostId(a);
 setPostImg2(b);
 setPostFirm_name(c);
 setPostproduct_name(d);
 setPostprice(e);
 setPostusername(f);
 setPosttown(g);
 setPostImg3(h);
 setPostImg4(i);
 setPostorder_status(j);
 setPosttextarea(k);
 

   
  }

  useEffect(() => 
  {
  
     fetch('https://gse-mart.com/call_api.php?action=all_service')
     .then((response) => response.json())
     .then((responseJson) => {
   
       setIsLoading(false);
       setDataSource(responseJson);

     })     
     .catch((error) => {

      setGeterror(true);

      })
    }, []);


     ReLoadHanduler =() =>{

      setGeterror(false); 


      fetch('https://gse-mart.com/call_api.php?action=all_service')
      .then((response) => response.json())
      .then((responseJson) => {
    
        setIsLoading(false);
        setDataSource(responseJson);
 
      })     
      .catch((error) => {
 
       setGeterror(true);
 
       })

    }




   _renderItem = ({item, index}) => {
    return (
    
      <TouchableOpacity   style={styles.item} 
      onPress={() => PostDetailsHanduler(
        item.id, 
        item.image2,  
        item.firm_name, 
        item.product_name, 
        item.price,
        item.username,
        item.town, 
        item.image3, 
        item.image4,
        item.order_status,
        item.textarea,
         
         )}

         >
          <View >
          <Image source={{ uri: "https://gse-mart.com/reg_users/"+item.username+"/"+item.image2 }}  style={{ width: '100%', height: 100 }}  /> 
              <Text style={styles.firmName}>{item.firm_name}</Text>
              <Text  style={{color: '#000', fontSize: 14, }}>{item.product_name}</Text> 
              <Text  style={{color: '#000', fontSize: 14, }}>   
              <AntDesign name="phone"   size={20} color='#3357A0'/>{item.username}
              </Text> 
              
              <Text  style={{color:'#3357A0', fontSize: 14, }}> 
              <AntDesign name="home"   size={20} color='#3357A0'/>  {item.town}
              </Text>
          </View>
      </TouchableOpacity>
    )
  }


 
    
   
  

    if(isLoading){
  
                if(!geterror)
                {  
                      return(
                            <View style={styles.container}>
                          
                                    <View> 
                                    <ActivityIndicator  size="large"   animating/>
                                    <Text>Loading</Text> 
                                    </View>  
                          
                          </View>
                          )
                }
                else
                {
                          return(
                                <View style={styles.container}>
                                
                                <View style={{ alignItems: 'center',}}> 
                                <AntDesign name="disconnect"  color={'#3357A0'} size={40} /> 
                                
                                    <Text style={{fontSize: 16,marginTop: 20,}}>  Error Loading </Text>
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
  
    }
    else
    {
  
      
            return (
      
            <View>

             {postvalueDetails == true ?
 

                  <Modal visible={postvalueDetails} animationType='fade' swipeDirection={['left','right' ]}  >
                  
              

                        <View style={styles.header}>
                        
                              <View style={{paddingTop: 5,}}>
                                  <TouchableOpacity>
                                  <AntDesign name="arrowleft"   size={34} color='white'  onPress={() => setPostvalueDetails(false)}     />
                                  </TouchableOpacity>
                              </View>

                              <View >
                                  <Text style={styles.headerText}> {postFirm_name} </Text>
                              </View>    

                        </View>

                    
                
                        <ScrollView>
                        <View>
                        
                            <PostDetails   
                            
                            ValueId={postId}  
                            ValueImg2={postImg2}  
                            ValueImg3={postImg3}  
                            ValueImg4={postImg4}  
                            ValueFirstname={postFirm_name}  
                            ValueProduct_name={postproduct_name}  
                            ValuePrice={postprice}  
                            ValueUsername={postusername}  
                            ValueTown={posttown}  
                            ValuepostOrder_status={postorder_status}  
                            ValueTextarea={posttextarea}  
                            />             
                        </View>

                        </ScrollView>


                    

                  </Modal>
            

              :
                    <FlatList 
                      numColumns={2}
                      data ={dataSource} 
                      renderItem = {_renderItem}
                      keyExtractor = {(item, index ) => index.toString() }
                    />           
             }

            </View>
      
            )
  
  
  
   
  
  
  
  }
  
      

}


 
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  paddingHorizontal: 0
},

item: {
width: '45%',
padding: 5,
marginLeft: '2.5%',
marginTop: 24,
backgroundColor: '#eee',
borderBottomWidth: 1,
borderRadius: 5,
borderBottomColor: 'blue',
borderTopColor: 'blue'
},

firmName: {
fontWeight: 'bold',
color: '#3357A0',

 },
 
 header: {
  marginTop: -5,
  flexDirection: 'row',
  width: '100%',
  backgroundColor: '#3357A0', 
  height: 90,  
  paddingTop: 10,
  paddingLeft: '4%',
},

headerText: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 20,
  paddingTop: 30,
  marginLeft: '5%',
  },
  
})

/**
 *     if(isLoading){
  
            return(
              <View style={styles.container}>
                <Modal visible={isLoading} animationType='fade' swipeDirection={['left','right' ]} > 
                   <Loading2  />
                </Modal>
            </View>
            )
  
    }
 */