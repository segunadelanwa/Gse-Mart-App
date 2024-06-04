import 'react-native-gesture-handler'; 
import React, { useState, useEffect,Fragment } from 'react';
import { View, Text,SafeAreaView,Alert,LogBox,StatusBar,StyleSheet,ActivityIndicator } from 'react-native';   
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import AsyncStorage from '@react-native-async-storage/async-storage';   
import Fontisto from 'react-native-vector-icons/Fontisto';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  
import EvilIcons from 'react-native-vector-icons/EvilIcons';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  
import { NavigationContainer,createAppContainer,createSwitchNavigator } from '@react-navigation/native'; 
import { AuthContext }  from './components/context'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  
import Login from './src/screens/Login';
import Signup from './src/screens/Signup'; 
import Loading from './src/screens/Loading';
import TabScreens from './src/screens/TabScreens';
import Search from './src/screens/Search';

import DashoardMart from './drawerscreens/DashoardMart';
import HomeScreen from './drawerscreens/HomeScreen';
import PostProduct from './drawerscreens/PostProduct';
import RenewSub from './drawerscreens/RenewSub';
import WebsiteLogo from './drawerscreens/WebsiteLogo';
import ViewPost from './drawerscreens/ViewPost';
import ProfilEdit from './drawerscreens/ProfilEdit';    
import DrawerProfileScreen from './drawerscreens/ProfileScreen';    
import AutoLogout from './drawerscreens/AutoLogout';   
import {DrawerContent} from './drawerscreens/DrawerContent';   
import { createDrawerNavigator } from '@react-navigation/drawer';  

 
 
//const Tab = createBottomTabNavigator(); 
const Tab = createMaterialBottomTabNavigator(); 
const Drawer = createDrawerNavigator();
 
  
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
 

export default function App() {
  const[isLoading2, setIsLoading2] = useState(false);
  const[isLoading, setIsLoading]   = useState(true);
  const[userToken, setUserToken]   = useState(''); 


  const authContext = React.useMemo(() => ({
 
    signIn : async() => {
    setIsLoading2(true);
     const authlog = await AsyncStorage.getItem('authLogin');
      setUserToken(authlog);
      





    setIsLoading2(false);
    setIsLoading(false);
         Alert.alert('WELCOME!', "Account Logged In Successfully",[
        {text: 'Okay' }
    ]);
  
  },
  
  signOut: () => {
  
  
    try {
      AsyncStorage.removeItem('login_session');
      AsyncStorage.removeItem('authLogin');
      //AsyncStorage.removeItem('authUser');
      setUserToken('');
      
    } catch(e) {
      console.log(e);
    }
  
   
  
    setIsLoading(false);
     setUserToken(true);

    return(
    alert('Account Logged Out')
    );
        


  },
  
  
  
  
  // signUp: () => {
  //   setIsLoading(false);
  //    setUserToken(true);
  // },
  
  
   }));

  useEffect(() => {
     
    setTimeout(async() => {

        const authLogin = await AsyncStorage.getItem('authLogin');
       
      //   const authUser = await AsyncStorage.getItem('authUser');

      //   Alert.alert('HOME', authUser,[
      //     {text: 'Okay'}
    
      // ]);
 

      
        setUserToken(authLogin);

        setIsLoading(false);

    }, 5000);

  
 
  });




  if( isLoading ){
    return(
      <Loading  />
    )
  }
  if( isLoading2 ){
    return(
      <View style={styles.container1}>
              
                        <View> 
                        <ActivityIndicator  size="large"   animating/>
                        <Text>Loading</Text> 
                        </View>  
              
      </View>
    )
  }



  if( userToken !== '1' ) 
{ 
          return (
  

                <AuthContext.Provider value={authContext}>
                <NavigationContainer >
                <SafeAreaView style={{flex: 1}}> 
               
                <StatusBar barStyle='#3357A0' backgroundColor='#3357A0' />
                <Tab.Navigator screenOptions={{
                  headerTintColor:'red',
                  headerStyle:{
                    backgroundColor: '#3357A0',
                     
                  }
                }}  
                shifting={false}
                activeColor="#3357A0"  inactiveColor="#777777"   barStyle={{ backgroundColor: 'white',paddingBottom: 10, alignItems:'center' }} 
                >
                <Tab.Screen   name="Tabs"    component={TabScreens} options={{tabBarLabel:'Online Shop',    tabBarIcon: ({ color }) => ( <Fontisto name="shopping-bag-1"  color={color} size={28} />   ),  }}  
                />

                <Tab.Screen   name="Artisan" component={Search}     options={{tabBarLabel:'Search',  tabBarIcon: ({ color }) => ( <MaterialIcons name="search" color={color} size={28}  />  ),   }}     
                />   

                <Tab.Screen   name="Home"  component={Login}      options={{tabBarLabel:'My Account',      tabBarIcon: ({ color }) => ( <EvilIcons name="user"  color={color} size={28} />   ),  }}  
                />   


                <Tab.Screen   name="Signup"  component={Signup}     options={{tabBarLabel:'Register',  tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account-plus-outline"   color={color} size={28} />   ),  }}   
                />

                <Tab.Screen   name="Renewsub"  component={RenewSub}     options={{tabBarLabel:'Payments',  tabBarIcon: ({ color }) => ( <MaterialIcons name="payment"   color={color} size={28} />   ),  }}   
                />

              
                
                </Tab.Navigator>
                   </SafeAreaView>         
                </NavigationContainer>
                </AuthContext.Provider>
  

          );

  }
  else
  {


      return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
        <SafeAreaView style={{flex: 1}}> 
               
        <StatusBar  backgroundColor='#3357A0' />
        <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} /> } 
        screenOptions={{
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: '#3357A0',
          }
        }}   activeColor="#3357A0"  inactiveColor="#3357A0"  barStyle={{ backgroundColor: '#3357A0' }}  >
       

        <Drawer.Screen name="Home"           component={HomeScreen} options={{title: 'HOME ', }}/>
        <Drawer.Screen name="Weblogo"        component={WebsiteLogo} options={{title: '  CHANGE WEBSITE LOGO  ', }}/>
        <Drawer.Screen name="Viewpost"       component={ViewPost} options={{title: '  MY WEBITE POST  ', }}/>
        <Drawer.Screen name="Sub"            component={RenewSub} options={{title: '  RENEW SUBSCRIPTION  ', }}/>
        <Drawer.Screen name="Postproduct"    component={PostProduct} options={{title: ' POST TO WEBSITE  ', }}/>
        <Drawer.Screen name="Profiledit"   component={ProfilEdit} options={{title: ' PROFILE EDIT  ', }}/>
        <Drawer.Screen name="Profilescreen" component={DrawerProfileScreen} options={{title: ' PROFILE PAGE  ', }}/>
        <Drawer.Screen name="Logout"        component={AutoLogout}    />
        <Tab.Screen   name="Online-Mart"    component={DashoardMart} options={{tabBarLabel:'Online Shop',    tabBarIcon: ({ color }) => ( <Fontisto name="shopping-bag-1"  color={color} size={28} />   ),  }}         />
        <Drawer.Screen name="Renewsub"       component={RenewSub}  options={{title: ' ', }} />
      </Drawer.Navigator>
      </SafeAreaView>         

        </NavigationContainer>
        </AuthContext.Provider>
      
      );


  }


} 



const styles = StyleSheet.create({
  container1: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,   
      
  },


    })


//https://callstack.github.io/react-native-paper/getting-started.html
//https://github.com/srivastavaanurag79/react-native-paper-select
//https://oblador.github.io/react-native-vector-icons/
//https://github.com/oblador/react-native-animatable
//https://reactnative.dev/docs/signed-apk-android  
//  See: https://docs.gradle.org/current/userguide/plugins.html#sec:subprojects_plugins_dsl
//C:\project\gsemartapp\android\app\build.gradle
//C:\project\gsemartapp\android\gradle.properties
//C:\project\gsemartapp\android\app\src\main\AndroidManifest.xml
//C:\project\gsemartapp\android\app\src\main\res\values\strings.xml
//PS C:\project\gsemartapp\android> 
 