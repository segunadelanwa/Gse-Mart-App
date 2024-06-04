import React, { useState, useEffect } from 'react';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  
import EditPost from './EditPost';  
import { View, Text, StyleSheet, StatusBar, TouchableOpacity,ScrollView,
  ActivityIndicator, Modal, Image,FlatList,ImageBackground} from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
 


export default function ViewPost({ navigation }) {
    const[isLoading, setIsLoading] = useState(true); 
    const[geterror, setGeterror] = useState(false);  
    const [dataSource, setDataSource] = useState([]); 
    const [loginData, setLoginData] = useState([]); 
    const [editpost, setEditPost] = useState(false); 
    const [deletePostId, setDeletePostId] = useState(''); 
    const[passReset, setPassReset] = useState(false);  
    /////////////////////////////////////////////////
    const [editPostId, setEditPostId] = useState(''); 
    const [editP_name, setEditP_name] = useState(''); 
    const [editPrice, setEditPrice] = useState(''); 
    const [editUsername, setEditUsername] = useState(''); 
    const [editTown, setEditTown] = useState(''); 
    const [editOrderstatus, setEditOrderstatus] = useState(''); 
    const [editTextarea, setEditTextarea] = useState(''); 
    const [editImage2, setEditImage2] = useState(''); 
       

  
 
const PostEditHanduler = (a,b,c,d,e,f,g,h) =>{
      
  setEditPostId(a);
  setEditP_name(b);
  setEditPrice(c);
  setEditUsername(d);
  setEditTown(e);
  setEditOrderstatus(f);
  setEditTextarea(g);
  setEditImage2(h);
 

  setEditPost(true)

}

const LoadPageHanduler = ()=>{
  setEditPost(false)
  ReLoadHanduler();

}
const PostDeleteHanduler = (val) =>{

  setPassReset(true);
  setDeletePostId(val);

}
const SetActionHanduler = () => {

  setPassReset(false); 

}

const ConfirmDeleteHanduler = (val) =>{

  setIsLoading(true); 
    fetch('https://gse-mart.com/call_api.php?action=delete_post&del_id='+val)
    .then((response) => response.json())
    .then((responseJson) => {
  
      setIsLoading(false); 
      alert(responseJson[0].feedback2
          
        
        )
        setPassReset(false); 
        ReLoadHanduler();
    }) 
    .catch((error) => {

      setGeterror(true);

  })
   

}

useEffect(() => {
 
        
        try{
        
            AsyncStorage.getItem('login_session')
            .then((value) => {
            const data = JSON.parse(value); 

            setLoginData(data); 
    
    
        });
            
    
        }
        catch(error){
    
        alert(error) 
    
        ReLoadHanduler();
    }

    
}, []);
 
const ReLoadHanduler =()=>{
  setIsLoading(true);
   fetch('https://gse-mart.com/call_api.php?action=viewpost&user='+loginData.username)
   .then((response) => response.json())
   .then((responseJson) => {
  
     setDataSource(responseJson);
     setIsLoading(false);
   })  
   .catch((error) => {

    setGeterror(true);

})

  } 


useEffect(() => 
{


  
setTimeout(async() => {
   fetch('https://gse-mart.com/call_api.php?action=viewpost&user='+loginData.username)
   .then((response) => response.json())
   .then((responseJson) => {
 
     setIsLoading(false);
     setDataSource(responseJson);

   }) 
   .catch((error) => {

    setGeterror(true);

})
  }, 5000);


    
  },[loginData]);

  
_renderItem = ({item, index}) => {
  return (

    


        <View  style={styles.item}  >
        <View  style={{backgroundColor: 'white',padding: 5,marginBottom: 15}}>
        <Text  style={{fontWeight: 'bold',textAlign: 'center',color: 'black', fontSize: 20, textTransform: 'uppercase'}}>{item.product_name}</Text>
        </View>
        <View style={styles.imgContainer}>
        <Image source={{ uri: "https://gse-mart.com/reg_users/"+item.username+"/"+item.image2 }}  style={{ width: '100%', height: '100%' }}  /> 
        </View>

        <View style={styles.imgContainer}>
        <Image source={{ uri: "https://gse-mart.com/reg_users/"+item.username+"/"+item.image3 }}  style={{ width: '100%', height: '100%' }}  /> 
        </View>

        <View style={styles.imgContainer}>
        <Image source={{ uri: "https://gse-mart.com/reg_users/"+item.username+"/"+item.image4 }}   style={{ width: '100%', height: '100%' }}  /> 
        </View>

         <Text style={styles.firmName}>{item.firm_name}</Text>
          <Text  style={{color: '#000', fontSize: 20, }}>{item.product_name}</Text>
          <Text  style={{color: '#000', fontSize: 20, fontWeight: 'bold' }}>₦{item.price} </Text>
          <Text  style={{color: '#000', fontSize: 20, }}> 
          <AntDesign name="phone"   size={30} color='#3357A0'/>{item.username}
          </Text> 

          <Text  style={{color: '#3357A0', fontSize: 20, }}> 
          <AntDesign name="home"   size={30} color='#3357A0'/>{item.town}
          </Text>

          <Text  style={{color: '#3357A0', fontSize: 20, }}> 
          <Icon name="cart"   size={30} color='#3357A0'/>{item.order_status}
          </Text>

          <View  style={{color: '#3357A0', fontSize: 20, }}> 
          <Text style={{  fontSize: 22,color:'black',fontWeight:'bold' }}>Post Decription</Text>
         <Text style={{color: '#000', fontSize: 20,marginBottom: 15 }}>{item.textarea}</Text> 
          </View>

          <View style={{flexDirection: 'row'}}>
          
           <TouchableOpacity  
        onPress={() => PostEditHanduler(
        item.id,  
        item.product_name, 
        item.price,
        item.username,
        item.town,  
        item.order_status,
        item.textarea,
        item.image2,
        )}
         style={{width: '50%'}}
        >
        <View  style={{borderWidth: 1,backgroundColor: 'white',padding: 5,borderColor: '#3357A0'}}>
        <Text  style={{fontWeight: '300',textAlign: 'center',color: '#3357A0', fontSize: 20, textTransform: 'capitalize'}}>
         EDIT POST <AntDesign  name="edit" size={25}/></Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => PostDeleteHanduler(item.id)}  style={{width: '50%'}}>
        <View  style={{borderWidth: 1,backgroundColor: '#3357A0',padding: 5,borderColor: '#3357A0'}}>
        <Text  style={{fontWeight: '300',textAlign: 'center',color: 'white', fontSize: 20, textTransform: 'capitalize'}}>
        DELETE POST <AntDesign name="delete"   size={25} color='white'/> </Text>
        </View>
        </TouchableOpacity>         
          </View>

        </View>
  
  )
}


    
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
                       <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD POST </Text>

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
          <ImageBackground  
          style={{        
            width: '100%',
          height: '100%', 
          flex: 1,}}    
          source={{uri:'https://gse-mart.com/img/mobilebg.jpeg'}}  >
                <View>
                  {passReset == true?
                              
                    <Modal visible={passReset} animationType='fade' swipeDirection={['left','right' ]} >

                        <View  style={{backgroundColor: '#3357A0', paddingTop:10,paddingBottom: 20, }} >
                        <Text style={{color: 'white',textAlign: 'center',fontSize: 20}}>DELETE POST ?</Text>
                        </View>

                        <View style={{marginTop: '60%',marginLeft: '20%'}}>

                        <TouchableOpacity onPress={()=> ConfirmDeleteHanduler(deletePostId)}
                         style={{borderWidth: 1,width: '70%',padding: 20,textAlign: 'center',alignContent: 'center',borderRadius: 10,marginBottom: 20,backgroundColor:'#f00'}}
                        >
                        <Text style={{fontSize:20,color: '#fff'}}> DELETE POST  <AntDesign name="delete"   size={25} color='#fff'/> 
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> SetActionHanduler()}
                        style={{backgroundColor: '#3357A0',width: '70%',padding: 20,textAlign: 'center',alignContent: 'center',borderRadius: 10}}
                        >
                        <Text style={{fontSize:20,color: 'white'}}>CANCEL DELETE   <Icon name="cancel"   size={25} color='white'/> 
                        </Text>
                        </TouchableOpacity>

                        </View>



                    </Modal>  
                  :
                      dataSource == null ? 
                            <View style={{marginTop: '60%',alignItems: 'center'}}>

                      <View style={{ alignItems: 'center',}}> 
                      <AntDesign name="disconnect"  color={'white'} size={30} /> 
                      
                          <Text style={{fontSize: 16,marginTop: 20,color: 'white'}}>  Error Loading </Text>
                          <Text style={{fontSize:16,marginTop: 2,color: 'white'}}>Empty Data </Text>
                      </View>

                      <TouchableOpacity onPress={() => ReLoadHanduler()}
                      style={{backgroundColor: 'white', padding: 10,borderRadius: 5,marginTop: 30}}
                      >
                      <Text style={{color: '#3357A0'}}>RELOAD  </Text>
                      </TouchableOpacity>
                      </View>              

                      :
                      <FlatList 

                      data ={dataSource} 
                      renderItem ={_renderItem}
                      keyExtractor = {(item, index ) => index.toString() }
                      /> 

                  }










                  <Modal visible={editpost} animationType='fade' swipeDirection={['left','right' ]} >

                  <View  style={{backgroundColor: '#3357A0', paddingTop:10,paddingBottom: 20, }} >
                  
                  <TouchableOpacity  onPress={() => LoadPageHanduler()} style={{marginLeft:15,marginTop:5}}  >
                  <AntDesign name="arrowleft"    size={34} color='white'   />
                  </TouchableOpacity>

                  <Text style={{color: 'white',textAlign: 'center',fontSize: 20}}>EDIT POST</Text>

                  </View>
 

                 <EditPost
                 
                post_id ={editPostId}
                product_name={editP_name}
                editprice={editPrice}
                username={editUsername}
                town={editTown}
                order_status ={editOrderstatus}
                textarea={editTextarea}
                image={editImage2}
                 />

                </Modal> 
                  </View>
                  </ImageBackground>
        );







    }

}

 


          
//07030430632
 
const styles = StyleSheet.create({
    container: {
    
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      paddingHorizontal: 0
    },
    container1: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      paddingHorizontal: 0
      },

    item: {
    width: '90%',
    padding: 5,
    marginLeft: '5%',
    marginTop: 24,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#777777', 
    },
    
    firmName: {
    fontWeight: 'bold',
    color: '#3357A0',
    fontSize: 30,
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

    imgContainer: {
      marginBottom: 25,
      width: 300, 
      height: 350,
      alignContent:'center',
      alignItems:'center',
      textAlign:'center',
      },
      
    })
    
 