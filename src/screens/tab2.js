import React, { useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import PostDetails from '../allModal/PostDetails';
import Loading2 from './Loading2';
import NumberFormat from 'react-number-format';
import {FlatList,Modal,StyleSheet, Image, View,ImageBackground,
   Text,ActivityIndicator,TouchableOpacity,ScrollView,Pressable} from 'react-native';

 

export default function  Tab2({ navigation }) {

  
 const[isLoading, setIsLoading] = useState(true); 
 const[geterror, setGeterror] = useState(false); 
 const[myTimeOut, setMyTimeOut] = useState(false); 
 const[dataSource, setDataSource] = useState([]); 
 const[postvalueDetails, setPostvalueDetails] = useState(false); 
 const[modalVisible, setModalVisible] = useState(false);
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


  const currencyFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'NGN'
  }).format(value);


 
 
    
  useEffect(() => 
  {
 
    let isSubscribed = true;

     fetch('https://gse-mart.com/call_api.php?action=all_vendor')
     .then((response) => response.json())
     .then((responseJson) => {
   
       setIsLoading(false); 
       setModalVisible(true);
       setDataSource(responseJson);

     })
     .catch((error) => {

      setGeterror(true);

      })
     
      return () => (isSubscribed = false)
    },[]);


    ReLoadHanduler =() =>{

      setGeterror(false); 

 
     fetch('https://gse-mart.com/call_api.php?action=all_vendor')
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
            <Text  style={{color: '#000', fontSize: 14, fontWeight: 'bold' }}>
            <Ionicons name="md-pricetag-outline"   size={20} color='#3357A0'/>{currencyFormat(item.price)}  
            </Text>
            <Text  style={{color: '#000', fontSize: 14, }}> 
            <AntDesign name="phone"   size={20} color='#3357A0'/>    {item.username}
            </Text> 
            <Text  style={{color: '#3357A0', fontSize: 14, }}> 
            <AntDesign name="home"   size={20} color='#3357A0'/> {item.town}
              </Text>
          </View>
      </TouchableOpacity>
    )
  }


 
//   setTimeout(async() => {

//       isLoading  
//       setMyTimeOut(true); 

// }, 10000);

   
  

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




            <View style={styles.centeredView}>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
            <View style={styles.centeredView}>
             <View style={styles.modalView}> 
            <ImageBackground 
            style={styles.imgBackground }  
            source={{uri:'https://owambextra.com/images/bg.jpeg'}}
            >
             
               
                  <Text style={styles.modalText}> Grow your business today</Text>  
                  
                  <View style={{marginBottom: 5,marginTop: 10,}}>
                   <Text style={{marginBottom: 10,color:'black',fontSize:16,textAlign: 'center'}}>Get started by owning a website for as low as N2500.00 </Text>
                                 
                   <Text style={{marginBottom: 50,color:'black',textAlign: 'center',fontSize:16,}}>BUY - SELL - OWN A WEBISTE </Text>                   
                  </View>



                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </TouchableOpacity>
                 
                </ImageBackground>
                </View>
                
              </View>
              
            </Modal>
          
          </View>
           
           

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

imgBackground: {
 
 
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
 
 headeradvertModal: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop:50,
},
 advertModal: {
  flex: 2,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingVertical: 50,
  paddingHorizontal: 30
 
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
  paddingTop: 20,
  marginLeft: '5%',
  },
  
 
  


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor:  '#777777', 
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#3357A0",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color:'black',
    fontWeight:'bold',
  }
})

 
// <ImageBackground 
// style={styles.imgBackground } 
// resizeMode='cover' 
// source={{uri:'https://owambextra.com/images/bg.jpeg'}}
// >
// </ImageBackground>
// imgBackground: {
// width: '100%',
// height: '100%', 
// flex: 1,
// },