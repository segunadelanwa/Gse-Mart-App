import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp  from '../screens/SignUp';  



const screens = {

  Signup: {
    screen: SignUp,
    navigationOptions: {
      title: 'OWAMBE EXTRA', 
      }
 
  }



}
 



const SignupStack = createNativeStackNavigator(screens,{
    defaultNavigationOptions: {
      headerTintColor: 'green',
    headerStyle: {backgroundColor: '#fff', height: 100},
    }
   
   
   });
 

export default SignupStack;

//export default NavigationContainer(HomeStack);

 

 