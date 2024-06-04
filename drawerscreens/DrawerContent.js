import React, { useState, useEffect } from 'react'; 
import {StyleSheet, View, TouchableOpacity,Image,Linking,ImageBackground } from 'react-native';
import { AuthContext }  from '../components/context';
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';

export function DrawerContent(props){
    const { signOut } = React.useContext(AuthContext); 
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

 
});
     
 
const toggleTheme = () => {

    setIsDarkTheme(!isDarkTheme);
}



    return(
        <View style={{flex: 1, }} >
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View  style={styles.userInfoSection}> 
                    <ImageBackground  
                    style={{        
                      width: '100%',
                    height: '100%', 
                    flex: 1,}}    
                    source={{uri:'https://gse-mart.com/img/mobilebg.jpeg'}}  >
                        <View style={{flexDirection: 'column', marginTop: 1}}  >
                        <TouchableOpacity
                        onPress={() => {props.navigation.navigate('Weblogo')}}
                        >
                            <Avatar.Image  
                                 source={{
                                     uri:'https://gse-mart.com/reg_users/'+loginData.username+'/'+loginData.photo
                                 }}
                                 size={100}
                                 
                            />                        
                        </TouchableOpacity>

                            <View style={{marginLeft: 1,flexDirection: 'column'}}>
                              <Title style={[styles.title, {textTransform:'capitalize',color: 'white'}]}> {loginData.firstname} {loginData.surname}</Title>
                               <Caption style={styles.caption}> {loginData.email}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                             <View  style={styles.section}>
                                  <Paragraph style={[styles.paragraph, styles.caption]}> {loginData.storage}</Paragraph>
                                  <Caption  style={styles.caption}>Total Storage</Caption>
                             </View>
                             <View  style={styles.section}>
                                  <Paragraph style={[styles.paragraph, styles.caption]}> {loginData.post_list}</Paragraph>
                                  <Caption  style={styles.caption}>Used Storage</Caption>
                             </View>
                        </View>
                        </ImageBackground>
                    </View>
                    <Drawer.Section style={[styles.DrawerSection, {marginTop: 20,}]}>
                         
                    <DrawerItem 
                    icon={({color, size}) => (
                        <Icon name="home-outline" 
                        color={color}
                        size={size}
                        />
                    )} 
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                  /> 



                <DrawerItem 
                icon={({color, size}) => (
                    <Icon name="web" 
                    color={color}
                    size={size}
                    />
                )} 
                label="GoTo My Website"
                onPress={() => Linking.openURL('https://gse-mart.com/'+loginData.username )}
              /> 


              <DrawerItem 
              icon={({color, size}) => (
                  <Icon name="account-outline" 
                  color={color}
                  size={size}
                  />
              )} 
              label="My Profile"
              onPress={() => {props.navigation.navigate('Profilescreen')}}
            /> 


            <DrawerItem 
            icon={({color, size}) => (
                <Icon name="view-grid-outline" 
                color={color}
                size={size}
                />
            )} 
            label="View My Post"
            onPress={() => {props.navigation.navigate('Viewpost')}}
          /> 


          <DrawerItem 
          icon={({color, size}) => (
              <Icon name="upload" 
              color={color}
              size={size}
              />
          )} 
          label="Upload To Website"
          onPress={() => {props.navigation.navigate('Postproduct')}}
        /> 




        <DrawerItem 
        icon={({color, size}) => (
            <Icon name="upload" 
            color={color}
            size={size}
            />
        )} 
        label="Update Logo"
        onPress={() => {props.navigation.navigate('Weblogo')}}
      /> 



          <DrawerItem 
          icon={({color, size}) => (
            <Fontisto name="shopping-bag-1" 
              color={color}
              size={size}
              />
          )} 
          label="Goto Mart"
          onPress={() => {props.navigation.navigate('Online-Mart')}}
        /> 

    


        <DrawerItem 
        icon={({color, size}) => (
            <FontAwesome name="gear" 
            color={color}
            size={size}
            />
        )} 
        label="Settings"
        onPress={() => {props.navigation.navigate('Profiledit')}}
      /> 

        <DrawerItem 
        icon={({color, size}) => (
            <FontAwesome name="money" 
            color={color}
            size={size}
            />
        )} 
        label="Renew Subscription"
        onPress={() => {props.navigation.navigate('Renewsub')}}
      /> 


                    </Drawer.Section>


                    <Drawer.Section title="Preferences">
                      <TouchableOpacity onPress={() => {toggleTheme()}}>
                          <View style={styles.preference}>
                               <Text> Dark Theme</Text>
                               <View pointerEvents='none'> 
                                <Switch value={isDarkTheme}/>
                               </View>
                               
                          </View>
                      
                      </TouchableOpacity>
                    
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            
            <Drawer.Section style={styles.bottomDrawerSection}>
           
        
             <DrawerItem 
              icon={({color, size}) => (
                  <Icon name="toggle-switch-off-outline" 
                  color={color}
                  size={size}
                  />
              )} 
              label="Sign Out"
              onPress={signOut}
            /> 

        
            </Drawer.Section>
        
        
         </View>
    );
}

const styles = StyleSheet.create({

drawerContainer: {
    flex: 1,

},
userInfoSection: {
    paddingLeft: 20,
    marginTop: -5,
    backgroundColor: '#3357A0',
    paddingBottom: 50,
    paddingTop: 25,
},
title: {
   fontSize: 16,
   marginTop: 3,
   fontWeight: 'bold',
},
caption: {
    fontSize: 14,
    lineHeight: 14,
    color:'white',
},
row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
},
section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,

},
paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
},
bottomDrawerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2
    
},
preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
},








});