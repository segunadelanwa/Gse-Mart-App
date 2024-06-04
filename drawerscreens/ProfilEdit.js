import React, { useState, useEffect} from 'react'; 
import { AppRegistry } from 'react-native';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button as PaperButton, Headline } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select'; 
import { AuthContext }  from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ScrollView, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native'
 


export default function ProfileEdit({ navigation }) {
  const { signOut } = React.useContext(AuthContext); 
  const[isLoading, setIsLoding] = useState(false); 
  const [formData, setFormData] = useState([]);   



  useEffect(() => 
  {
  
   
  
   
       
        try{
          
           AsyncStorage.getItem('login_session')
          .then((value) => {
            const data = JSON.parse(value); 
  
            setFormData(data); 
     
    
          });
           
      
        }
        catch(error){
      
          alert(error) 
     
      
      }
  
   
  }, []);
 

 



const [gender, setGender] = useState({
  value: formData.gender,
  list: [
    { _id: '1', value: 'MALE' },
    { _id: '2', value: 'FEMALE' },
    { _id: '3', value: 'OTHERS' },
  ],
  selectedList: [],
  error: '',
});



const [busType, setBusType] = useState({
  value: '',
  list: [
    { _id: '1', value: 'artisan' },
    { _id: '2', value: 'vendor' }, 
  ],
  selectedList: [],
  error: '',
});

const [categories, setCategories] = useState({
  value: '',
  list: [
    
    { _id: '1', value: 'AGRICULTURE' },
    { _id: '2', value: 'ART' },
    { _id: '3', value: 'AUTOMOBILE' },
    { _id: '4', value: 'CONSTRUCTION' },
    { _id: '5', value: 'COMPUTING' },
    { _id: '6', value: 'EDUCATION' },
    { _id: '7', value: 'ENTERTAINMENT' },
    { _id: '8', value: 'ELECTRONICS' },
    { _id: '9', value: 'FASHION' },
    { _id: '10', value: 'FOOD' },
    { _id: '11', value: 'FURNITURE' },
    { _id: '12', value: 'HEALTH' },
    { _id: '13', value: 'KITCHEN' },
    { _id: '14', value: 'KIDDIES' },
    { _id: '15', value: 'PHONES' },
    { _id: '16', value: 'PRINTING' },
    { _id: '17', value: 'ESTATE' },
    { _id: '18', value: 'SERVICES' },
    { _id: '19', value: 'VEHICLES' },
  ],
  selectedList: [],
  error: '',
});

  const [subcategories, setSubCategories] = useState({
  value: '',
  list: [],
  selectedList: [],
  error: '',
});




useEffect(() => {
if (categories.value == ''){

 var user_cat  = '';
}else{
var user_cat  = categories.value;
}




if(user_cat == 'CONSTRUCTION'){
 setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Building Materials' },
    { _id: '2', value: 'Architect' },
    { _id: '3', value: 'Aluminium' },
    { _id: '4', value: 'Wall Panel' },
    { _id: '5', value: 'POP Paint' },
    { _id: '6', value: 'Outdoor Indoor Decoration' },
    { _id: '7', value: 'Electrical Equipment' },
    { _id: '8', value: 'Electrical Tools' },
    { _id: '9', value: 'Hand Tools' },
    { _id: '10', value: 'Measuring and Layout Tools' },
    { _id: '11', value: 'Plumbing Materials' },
    { _id: '12', value: 'Plumbing and Water Supply' },
    { _id: '13', value: 'Solar Energy' },
    { _id: '14', value: 'Windows' },
    { _id: '15', value: 'Building and Renovation' },
    { _id: '16', value: 'Pligh Wood' },
    { _id: '17', value: 'Glass Interior Decoration' },
    { _id: '18', value: 'Tiles/Swimming pool' },
    { _id: '19', value: 'Tiles Building Materials' },
  ],
  selectedList: [],
  error: '',
});


}else if(user_cat == 'VEHICLES'){

  setSubCategories({
    ...subcategories,  
    value: '',
    list: [
      { _id: '1', value: 'Cars' },
      { _id: '2', value: 'Buses' },
      { _id: '3', value: 'Motorcycles and Scooters' },
      { _id: '4', value: 'Trailers and Trucks' },
      { _id: '5', value: 'Spare Parts' }, 
    ],
    selectedList: [],
    error: '',
  
});

}else if(user_cat == 'ELECTRONICS'){

  setSubCategories({
    ...subcategories,  
    value: '',
    list: [
      { _id: '1', value: 'Tv,Electronics Sales' },
      { _id: '2', value: 'Computer and Laptops' },
      { _id: '3', value: 'DVD' },
      { _id: '4', value: 'Home Theatre' },
      { _id: '5', value: 'Electronics repair' }, 
      { _id: '6', value: 'Electronics Accessories' }, 
      { _id: '7', value: 'Musical Instruments' }, 
      { _id: '8', value: 'Cameras' }, 
      { _id: '9', value: 'Security Cameras and Equipments' }, 
      { _id: '10', value: 'Refrigerator Sales' }, 
      { _id: '11', value: 'Refrigerator repair' }, 
      { _id: '12', value: 'Electrical Fancy Light Electronice' }, 
    ],
    selectedList: [],
    error: '',
  
});


}else if(user_cat == 'COMPUTING'){

  setSubCategories({
    ...subcategories,  
    value: '',
    list: [
      { _id: '1', value: 'Computers and Laptops' },
      { _id: '2', value: 'Computer Accessories' },
      { _id: '3', value: 'Data Storage' },
      { _id: '4', value: 'Antivirus and Security' },
      { _id: '5', value: 'Computer Softwares' }, 
      { _id: '6', value: 'Printers and Scanners' }, 
      { _id: '7', value: 'Video Games and Accessories' },   
    ],
    selectedList: [],
    error: '',
  
});


}else if(user_cat == 'FASHION'){

  setSubCategories({
    ...subcategories,  
    value: '',
    list: [
      { _id: '1', value: 'Cosmetics' },
      { _id: '2', value: 'Bags Sales' },
      { _id: '3', value: 'Leather Sales' },
      { _id: '4', value: 'Clothing' },
      { _id: '5', value: 'Clothing Accessories' }, 
      { _id: '6', value: 'Jewelry' }, 
      { _id: '7', value: 'Shoes Sales' },   
      { _id: '8', value: 'Watch Sales' },   
      { _id: '9', value: 'Wigs and Attachments' },   
      { _id: '10', value: 'Cream' },   
      { _id: '11', value: 'Make-up and Beauty' },   
      { _id: '12', value: 'Accesories' },   
      { _id: '13', value: 'General Sales' },   
      { _id: '14', value: 'Tailoring' },   
      { _id: '15', value: 'Wears' },   
      { _id: '16', value: 'Fashion Desinger' },   
      { _id: '17', value: 'Sewing Machine' },   
      { _id: '18', value: 'Curtains Materials and Accessories' },   
    ],
    selectedList: [],
    error: '',
  
});


}else if(user_cat == 'ART'){

  setSubCategories({
    ...subcategories,  
    value: '',
    list: [
      { _id: '1', value: 'Wallpaper' },
      { _id: '2', value: 'Arts and Crafts' },
      { _id: '3', value: 'Picture Framing' },
      { _id: '4', value: 'Books' },
      { _id: '5', value: 'Camping' }, 
      { _id: '6', value: 'Gear' }, 
      { _id: '7', value: 'CDs and DVDs' },   
      { _id: '8', value: 'Award/Plaque' },      
    ],
    selectedList: [],
    error: '',
  
});

}else if(user_cat == 'ART'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Wallpaper' },
    { _id: '2', value: 'Arts and Crafts' },
    { _id: '3', value: 'Picture Framing' },
    { _id: '4', value: 'Books' },
    { _id: '5', value: 'Camping' }, 
    { _id: '6', value: 'Gear' }, 
    { _id: '7', value: 'CDs and DVDs' },   
    { _id: '8', value: 'Award,Plaque' },      
  ],
  selectedList: [],
  error: '',

});



}else if(user_cat == 'PHONES'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Mobile Phones' },
    { _id: '2', value: 'Tablets' },
    { _id: '3', value: 'Phones Accesories' },
    { _id: '4', value: 'Phones Engineer' },
    { _id: '5', value: 'Other' },  
  ],
  selectedList: [],
  error: '',

});

}else if(user_cat == 'AGRICULTURE'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Food Crops' },
    { _id: '2', value: 'Farm Equipments' },
    { _id: '3', value: 'Feeds, Supplements and Seeds' },
    { _id: '4', value: 'Livestock and Poultry' },
    { _id: '5', value: 'Animal Products' },  
  ],
  selectedList: [],
  error: '',
});

}else if(user_cat == 'FOOD'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Food Stuffs' },
    { _id: '2', value: 'Beverages' },
    { _id: '3', value: 'Soft Drinks' },
    { _id: '4', value: 'Other' },
     
  ],
  selectedList: [],
  error: '',

});



}else if(user_cat == 'KITCHEN'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Gas Cooker/Oven' },
    { _id: '2', value: 'Blenders' },
    { _id: '3', value: 'Microwave' },
    { _id: '4', value: 'Fridge and Frezer' },
    { _id: '5', value: 'Pressure Cooker' },
    { _id: '6', value: 'Sandwich Maker and Toaster' },
    { _id: '7', value: 'Electric Chimney,Cooker Hood' },
    { _id: '8', value: 'Juicer' },
    { _id: '9', value: 'Food Processor' },
    { _id: '10', value: 'Water Heater' },
  ],
  selectedList: [],
  error: '',

});


}else if(user_cat == 'AUTOMOBILE'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'General Mechanize' },
    { _id: '2', value: 'Automobile Impoter' },
    { _id: '3', value: 'Automobile Mechanic' },
    { _id: '4', value: 'Spare Parts Dealer' },
    { _id: '5', value: 'Tyre Dealer' },
    { _id: '6', value: 'Rim Dealer' },
    { _id: '7', value: 'Engine Dealer' },
    { _id: '8', value: 'Battery Dealer' },
    { _id: '9', value: 'Horn Dealer' },
    { _id: '10', value: 'Other' },
  ],
  selectedList: [],
  error: '',

});

}else if(user_cat == 'SERVICES'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Protocol,Ticketing and Logistics' },
    { _id: '2', value: 'Education and Coaching' },
    { _id: '3', value: 'General Cleaning' },
    { _id: '4', value: 'Security' },
    { _id: '5', value: 'Computer,IT' },
    { _id: '6', value: 'Catering and Events' },
    { _id: '7', value: 'Health andBeauty' },
    { _id: '8', value: 'Landscaping and Gardening' },
    { _id: '9', value: 'Manufacturing' },
    { _id: '10', value: 'Legal' },
    { _id: '11', value: 'Photography and Video ' },
    { _id: '12', value: 'Printing and Graphics' },
    { _id: '13', value: 'Recruitment and Outsourcing' },
    { _id: '14', value: 'Financial Services' },
    { _id: '15', value: 'General Repairs' },
    { _id: '16', value: 'Generator Repair' },
    { _id: '17', value: 'Electrician Repair' },
    { _id: '18', value: 'Refrigerator Repair' },
    { _id: '19', value: 'Lift Repair' },
    { _id: '20', value: 'Watch Sales' },
    { _id: '21', value: 'Watch Repair' },
    { _id: '22', value: 'Television Repair' },
    { _id: '23', value: 'Inverter Repair' },
    { _id: '24', value: 'Air Conditioner Repair' },
    { _id: '25', value: 'Roof Repair' },
    { _id: '26', value: 'Window Repair' },
    { _id: '27', value: 'Cobblers' },
    { _id: '28', value: 'House Painting' },
    { _id: '29', value: 'Car Painting' },
    { _id: '30', value: 'Vehicle Insurance' },
    { _id: '31', value: 'Travel Agency ' },
    { _id: '32', value: 'Driving school' },
    { _id: '33', value: 'Music School' },
    { _id: '34', value: 'Dance Training School' },
    { _id: '35', value: 'School Tutor' },
    { _id: '36', value: 'Canopy' },
    { _id: '37', value: 'Bus Rental' },
    { _id: '38', value: 'Plumber' },
    { _id: '39', value: 'Laundry and Dry Cleaning' },
    { _id: '40', value: 'Nanny' },
    { _id: '41', value: 'Cook ' },
    { _id: '42', value: 'DSTV Installation' },
    { _id: '43', value: 'CCTV installation' },
    { _id: '44', value: 'Outdoor/indoor Decoration' },
    { _id: '45', value: 'General Services' },
    { _id: '46', value: 'Phones Repair' },
    { _id: '47', value: 'Other' },
     
  ],
  selectedList: [],
  error: '',

});


}else if(user_cat == 'KIDDIES'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Babies and Kids' },
    { _id: '2', value: 'Accesories' },
    { _id: '3', value: 'Baby and Child Care' },
    { _id: '4', value: 'Children Clothing' },
    { _id: '5', value: 'Children Furniture' },
    { _id: '6', value: 'Children Gear and Safety' },
    { _id: '7', value: 'Children Shoes' },
    { _id: '5', value: 'Maternity and Pregnancy' },
    { _id: '6', value: 'Children Toy' },
    { _id: '7', value: 'Other' },
  ],
  selectedList: [],
  error: '',

});

} else if(user_cat == 'HEALTH'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Bath and Body' },
    { _id: '2', value: 'Cosmetics and Healthcare' },
    { _id: '3', value: 'Medical Equipment' },
    { _id: '4', value: 'Toiletries' },
    { _id: '5', value: 'Fragrance' },
    { _id: '6', value: 'Hair Beauty' },
    { _id: '7', value: 'Makeup' },
    { _id: '8', value: 'Sexual Wellness' },
    { _id: '9', value: 'Skin Care' },
    { _id: '10', value: 'Tobacco Accessories' },
    { _id: '11', value: 'Tools and Accessories' },
    { _id: '12', value: 'Vitamins and Supplements' },
    { _id: '13', value: 'Personal care' },
    { _id: '14', value: 'Oral care' },
    { _id: '15', value: 'Health Center' },
    { _id: '16', value: 'Doctor' },
    { _id: '17', value: 'Nurse' },
    { _id: '18', value: 'Other' },
    
  ],
  selectedList: [],
  error: '',

});

}else if(user_cat == 'ESTATE'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Land Sales' },
    { _id: '2', value: 'Land Leasing' },
    { _id: '3', value: 'House For Sale' },
    { _id: '4', value: 'House For Rent' },
    { _id: '5', value: 'Real Esate Agent' },
  ],
  selectedList: [],
  error: '',

});


}else if(user_cat == 'ENTERTAINMENT'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Dj' },
    { _id: '2', value: 'Event MC' },
    { _id: '3', value: 'Event Center' },
    { _id: '4', value: 'Event Planner' },
    { _id: '5', value: 'Catering' },
    { _id: '6', value: 'Makeup Up' },
    { _id: '7', value: 'Live Musician' },
    { _id: '8', value: 'Cake Baking' },
    { _id: '9', value: 'Cake Baking,Catering and Event Planning' },
    { _id: '10', value:'Photography and Outdoor Advertising' },
    { _id: '11', value:'Event,Video Editing and General Branding' },
    { _id: '12', value:'Cook' },
  ],
  selectedList: [],
  error: '',

});

}else if(user_cat == 'FURNITURE'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Pligh Wood' },
    { _id: '2', value: 'Home Furnitures' },
    { _id: '3', value: 'Chair Fabrics' },
    { _id: '4', value: 'Furniture Materials' },
    { _id: '5', value: 'Furniture sales' },
    { _id: '6', value: 'Foam Products' },
    { _id: '7', value: 'Other' },
   
  ],
  selectedList: [],
  error: '',

});

}else if(user_cat == 'PRINTING'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Printer' },
    { _id: '2', value: 'Graphic Artist' },
    { _id: '3', value: 'Printing Press' },
    { _id: '4', value: 'Printing Machine Sales' },
    { _id: '5', value: 'Printing Paper Sales' },
    { _id: '6', value: 'Printing Inks Sales' },
    { _id: '7', value: 'Printing Materials Sales' },
    { _id: '6', value: 'Printing Chemicals' },
    { _id: '7', value: 'Other' },
   
  ],
  selectedList: [],
  error: '',

});


}else if(user_cat == 'EDUCATION'){

setSubCategories({
  ...subcategories,  
  value: '',
  list: [
    { _id: '1', value: 'Private School' },
    { _id: '2', value: 'Coaching Center' },
    { _id: '3', value: 'Other' },
  ],
  selectedList: [],
  error: '',

});
}


},[categories]);




const InserRecord = () => {  
  setIsLoding(true);

          var user_subcat      = subcategories.value;        
          var user_cat         = categories.value;        
          var user_gender      = gender.value;             
          var user_busType     = busType.value;         
          var user_username    = formData.username;       
          var user_firstname   = formData.firstname;       
          var user_surname     = formData.surname;       
          var user_facebook    = formData.facebook;       
          var user_firmname    = formData.firmname;       
          var user_address     = formData.address;       
          var user_town        = formData.town;       
          var user_state       = formData.state;              
          var user_country     = formData.country;    
          var user_email       = formData.email;    
          var user_mission     = formData.mission;    
          var user_vission     = formData.vission;    
          var user_value       = formData.value;    
  var user_intown_shipping     = formData.intown_shipping;    
  var outtown_shipping         = formData.outtown_shipping;         
 
    
  if(user_subcat == '' || user_cat == '' || user_gender == '' || user_busType == '' )
  {
       
        Alert.alert('OOPS!', "Bussness Type, Categories, SubCategories, Gender one of the field is Missing",[
            {text: 'Please Try Again'}

        ]);

       setIsLoding(false);
        
  }
  else
  {

            var InsertAPIURL = "https://gse-mart.com/call_api.php?action=loginupdate_api";
            var headers = {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
            var Data = {
  
              user_subcat0:user_subcat,     
              user_cat0:user_cat,       
              user_gender0:user_gender,            
              user_busType0:user_busType,     
              user_username0:user_username,     
              user_firstname0:user_firstname,    
              user_surname0:user_surname,     
              user_facebook0:user_facebook,    
              user_firmname0:user_firmname,      
              user_address0:user_address,   
              user_town0:user_town,    
              user_state0:user_state,       
              user_country0:user_country,   
              user_email0:user_email,  
              user_mission0:user_mission,  
              user_vission0:user_vission, 
              user_value0:user_value,   
              user_intown_shipping0:user_intown_shipping,   
              outtown_shipping0:outtown_shipping,  
            };

            fetch(InsertAPIURL,
                {
                method:'POST',
                header:headers,
                body: JSON.stringify(Data)

                
        
                })
                .then((response) => response.json())
                .then((response) => {
                setIsLoding(false);
                    
                    if(response[0].success == "ok"){

                         
                           
                            Alert.alert('SUCCESS!',  response[0].feedback2,[
                                {text: 'Okay'}
                            ]);
                            signOut(); //Auto logout affeter update
                    }else if(response[0].success == "Failed"){

                      alert(response[0].feedback )
                    }
                


                    })
                .catch((error) => {

                alert("Error" +error);

                })
            
    }
  
 
}
 
if(isLoading)
{
   
        return(
          <View style={styles.loading}>
          <Image    source={require('../assets/loading1.gif')}  style={{ width: 150, height: 250 }} />
            <Text  style={{ textAlign: 'center',color:'#3357A0' }}> Loading ...</Text>
        </View>
        );

    }
    else
    { 
    return (
        <PaperProvider>
        <ScrollView>   
            <KeyboardAvoidingView style={styles.container} behavior="padding" >
    
          

                <View  style={styles.inputcontainer}>






                    <Text style={{ color: '#3357A0', fontSize: 25,marginTop: 20,marginBottom: 20, textAlign: 'center'}}> 
                  PROFILE UPDATE
                    </Text>
    
                <View style={{marginBottom: 20}}>

                <Text>{formData.surname}</Text>
                <TextInput     
                onChangeText={text => setFormData({...formData, surname: text })}
                  placeholder='Update Surname'
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default" 
                  />

                  <Text style={{marginTop: 20}}>{formData.firstname}</Text>
                <TextInput     
                onChangeText={text => setFormData({...formData, firstname: text })}
                  placeholder='Upadte Firstname' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default" 
                  />

                  <Text style={{marginTop: 20}}>{formData.facebook}</Text>
                  <TextInput   
                  onChangeText={text => setFormData({...formData, facebook: text })}
                  placeholder='Update Facebook Link / Page' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  />          
            

                  <Text style={{marginTop: 20}}>{formData.firmname}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, firmname: text })}
                  placeholder='Update Your Firm/Company Name' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          

                  <Text style={{marginTop: 20}}>{formData.address}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, address: text })}
                  placeholder='Office/Shop Address' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          

                  <Text style={{marginTop: 20}}>{formData.town}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, town: text })}
                  placeholder='Update Town' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          

                  <Text style={{marginTop: 20}}>{formData.state}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, state: text })}
                  placeholder='Update State' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          

                  <Text style={{marginTop: 20}}>{formData.country}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, country: text })}
                  placeholder='Update Country' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          
                  <Text style={{marginTop: 20}}>{formData.email}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, email: text })}
                  placeholder='Update Email' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />     
                  
                  
                  <Text style={{marginTop: 20}}>{formData.intown_shipping}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, intown_shipping: text })}
                  placeholder='Update Intown_shipping (Vendor Only)' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          
                  
                  
                  <Text style={{marginTop: 20}}>{formData.outtown_shipping}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, outtown_shipping: text })}
                  placeholder='Update uttown_shipping (Vendor Only)' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          
                
                  

                  <View style={{marginBottom: 20,marginTop: 20}}>  
                  <Text style={{marginTop: 20}}>{formData.reg_type == ''? 'Business Type Field is Empty Select':formData.reg_type}</Text>
                    <PaperSelect
                    label="Business Type"
                    value={formData.reg_type} 
                    onSelection={(value) => {
                        setBusType({
                        ...busType,
                        value: value.text,
                        selectedList: value.selectedList,
                        error: '',
                      });
                    }}
                    arrayList={[...busType.list]}
                    selectedArrayList={busType.selectedList}
                    errorText={busType.error}
                    multiEnable={false}
                    dialogTitleStyle={{ color: '#3357A0' }}
                    checkboxColor="black"
                    checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                    textInputMode="flat"
                    textInputColor="red"
                  /> 
                  </View>



                  <View style={{marginBottom: 20,marginTop: 20}}>  
                <Text style={{marginTop: 20}}>{formData.gender == ''? 'Gender Field is Empty Select':formData.gender}</Text>
                  <PaperSelect
                    label="Gender" 
                    value={formData.gender}
                    onSelection={(value) => {
                      setGender({
                        ...gender,
                        value: value.text,
                        selectedList: value.selectedList,
                        error: '',
                      });
                    }}
                    arrayList={[...gender.list]}
                    selectedArrayList={gender.selectedList}
                    errorText={gender.error}
                    multiEnable={false}
                    dialogTitleStyle={{ color: '#3357A0' }}
                    checkboxColor="black"
                    checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                    textInputMode="flat"
                    textInputColor="red"
                  />
                  </View>           



                  <View style={{marginBottom: 20,marginTop: 20}}> 
                  <Text style={{marginTop: 20}}>{formData.label== ''? 'Category Field is Empty Select': formData.label}</Text>
                  <PaperSelect
                  label="Categories" 
                  value={formData.label}
                  onSelection={(value)=>{ 
                    setCategories({
                      ...categories,
                      value: value.text,
                      selectedList: value.selectedList,
                      error: '',
                    });
                  
                  }}
                  arrayList={[...categories.list]}
                  selectedArrayList={categories.selectedList}
                  errorText={categories.error}
                  multiEnable={false}
                  dialogTitleStyle={{ color: '#3357A0' }}
                  checkboxColor="black"
                  checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                  textInputMode="flat"
                  textInputColor="red"
                />
                
                </View>

                <View style={{marginBottom: 20,marginTop: 20}}> 
                <Text style={{marginTop: 20}}>{formData.label2 == ''? 'SubCategory Field is Empty Select':formData.label2}</Text>
                <PaperSelect
                label="Sub Categories" 
                value={formData.label2}
                onSelection={(value) => {
                  setSubCategories({
                    ...subcategories,
                    value: value.text,
                    selectedList: value.selectedList,
                    error: '',
                  });
                }}
                arrayList={[...subcategories.list]}
                selectedArrayList={subcategories.selectedList}
                errorText={subcategories.error}
                multiEnable={false}
                dialogTitleStyle={{ color: '#3357A0' }}
                checkboxColor="black"
                checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700' }}
                textInputMode="flat"
                textInputColor="red"
              />           
                </View>


                  
                  <Text style={{marginTop: 20}}>Vission: {formData.vission}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, vission: text })}
                  placeholder='Update Vission' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          
                  
                  <Text style={{marginTop: 20}}>Mission: {formData.mission}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, mission: text })}
                  placeholder='Update Mission' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  
                  />          
                  
                  <Text style={{marginTop: 20}}>Value: {formData.value}</Text>
                  <TextInput    
                  onChangeText={text => setFormData({...formData, value: text })}
                  placeholder='Update Value' 
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="default"
                  multiline
                  
                  />          

                          
                </View>  


    

    


          
                              <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                onPress={InserRecord}
                                style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Create Account</Text>
                                </TouchableOpacity> 
                            </View>         
                </View>

              



            
                



              
            </KeyboardAvoidingView>
        </ScrollView> 
        </PaperProvider> 
    );
    
   }
}

//value: any
//https://callstack.github.io/react-native-paper/getting-started.html
//https://github.com/srivastavaanurag79/react-native-paper-select

const styles = StyleSheet.create({
  loading: {
    flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
 },
    header: {  
        flexDirection: 'row',
        backgroundColor: '#c908bd',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        
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
marginTop: 1,
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
   
}



})
