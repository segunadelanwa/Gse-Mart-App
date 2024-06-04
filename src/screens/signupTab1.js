import React, { useState, useEffect} from 'react';  
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Provider as PaperProvider } from 'react-native-paper'; 
import { PaperSelect } from 'react-native-paper-select';

import {Image,Alert, ScrollView, KeyboardAvoidingView, StyleSheet,ActivityIndicator,
   Text, TextInput, TouchableOpacity, View,Linking } from 'react-native';

// export const selectValidator = (value) => {
//   if (!value || value.length <= 0) {
//     return 'Please select a value.';
//   }

//   return '';
// };

 




export default function SignupTab1() {
  const[isLoading, setIsLoading] = useState(false); 
  const[geterror, setGeterror] = useState(false); 
  
const [gender, setGender] = useState({
  value: '',
  list: [
    { _id: '1', value: 'MALE' },
    { _id: '2', value: 'FEMALE' },
    { _id: '3', value: 'OTHERS' },
  ],
  selectedList: [],
  error: '',
});



 const[formData, setFormData] = useState({
           
      firmname:'', 
      firstname:'', 
      surname:'', 
      officeAddress:'', 
      state:'', 
      country:'', 
      facebookPage:'', 
      officeTown:'',  
      marketerCode:'', 
      username: '',  
      password_2:'', 
      password: '',
      email: '',
 });
 
 
 const [busType, setBusType] = useState({
    value: '',
    list: [
      { _id: '1', value: 'Artisan' },
      { _id: '2', value: 'Vendor' }, 
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

 

ReLoadHanduler =() =>{

  setIsLoading(false);
  setGeterror(false);

}     



const InserRecord = () => {
 
  setIsLoading(true); 


    var user_subcat      = subcategories.value;        
    var user_cat         = categories.value;        
    var user_gender      = gender.value;             
    var user_busType     = busType.value;        
    var user_firmname    = formData.firmname;       
    var user_firstname   = formData.firstname;       
    var user_surname     = formData.surname;       
    var user_offAddr     = formData.officeAddress;       
    var user_officeTown  = formData.officeTown;       
    var user_state       = formData.state;       
    var user_country     = formData.country;       
    var user_facePage    = formData.facebookPage;       
    var user_markCode    = formData.marketerCode;       
    var user_username    = formData.username;       
    var user_password_2  = formData.password_2;       
    var user_password    = formData.password;       
    var user_email    = formData.email;       

 
    if(
      user_email == ''||    
      user_officeTown == ''||    
      user_firmname == ''||    
      user_username == ''||    
      user_facePage == ''||  
      user_country == ''||  
      user_state == ''||  
      user_offAddr == ''||  
      user_surname == ''||  
      user_firstname ==''  
    ){
      setIsLoading(false); 
        Alert.alert('OOPS!', "All fields are required",[
            {text: 'Please Try Again', onPress: () => console.log('alert close')}

        ]);

    }
    else  if( user_password !== user_password_2 ){
      setIsLoading(false); 
        Alert.alert('OOPS!', "Your Password did not match",[
            {text: 'Please Try Again', onPress: () => console.log('alert close')}

        ]);

    }
  else
   {
    setIsLoading(true); 
 
           
            var InsertAPIURL = "https://gse-mart.com/call_api.php?action=register_api";
            var headers = {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
            var Data = {
                
                con_user_subcat: user_subcat,   
                con_user_cat: user_cat,     
                con_user_gender: user_gender, 
                con_user_busType: user_busType,
                con_user_firmname: user_firmname,
                con_user_firstname: user_firstname,
                con_user_surname: user_surname,
                con_user_offAddr:user_offAddr,
                con_user_officeTown:user_officeTown,
                con_user_state:user_state,
                con_user_country:user_country,
                con_user_facePage:user_facePage,
                con_user_markCode:user_markCode,
                con_user_username:user_username,
                con_user_password:user_password,
                con_user_email:user_email,

            };

            fetch(InsertAPIURL,
                {
                method:'POST',
                header:headers,
                body: JSON.stringify(Data)

                
        
                })
                .then((response) => response.json())
                .then((response) => {
        
                    
                    if(response[0].success == "ok"){
                      setIsLoading(false);  
                            
                            Alert.alert('SUCCESS!', response[0].feedback,[
                              {text: 'OKAY'}
                  
                          ]);


                           // props.navigation.navigate("Renewsub");
                                
                    }else if(response[0].success == "Failed"){
                      setIsLoading(false); 


                      alert(response[0].feedback )
                    }
                


                    })
                    .catch((error) => {
                      setGeterror(true);
                    });
            

  
 
    }
}

// <Image    source={require('../../assets/loading1.gif')}  style={{ width: 150, height: 250 }} />
// <Text  style={{ textAlign: 'center',color:'#3357A0' }}> Loading ...</Text>

if(isLoading){
  
   
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
                           <Text style={{fontSize: 16,color: '#3357A0'}}>RELOAD PAGE </Text>

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
            <PaperProvider>
            <ScrollView>   
                <KeyboardAvoidingView style={styles.container} behavior="padding" >
        
              

                    <View  style={styles.inputcontainer}>






                        <Text style={{ color: '#3357A0', fontSize: 20,marginTop: 20,marginBottom: 20, textAlign: 'center'}}> 
                        Account Setup 
                        </Text>




                        <View  
                        style={[styles.input2,  ]}
                        >  
              
                        <PaperSelect
                          label="Business Type"
                          value={busType.value} 
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
                    <View style={{marginBottom: 20}}>


                    <TextInput     
                    onChangeText={text => setFormData({...formData, firmname: text })}
                      placeholder='Company/Firm Name' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default" 
                      />


                    <TextInput     
                    onChangeText={text => setFormData({...formData, firstname: text })}
                      placeholder='Firstname' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default" 
                      />

                      <TextInput   
                      onChangeText={text => setFormData({...formData, surname: text })}
                      placeholder='Surname' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default"
                      />          

                      <TextInput    
                      onChangeText={text => setFormData({...formData, officeAddress: text })}
                      placeholder='Office Address' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default"
                      />          

                      <TextInput    
                      onChangeText={text => setFormData({...formData, officeTown: text })}
                      placeholder='Office/Shop town' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default"
                      
                      />          

                      <TextInput    
                      onChangeText={text => setFormData({...formData, state: text })}
                      placeholder='Office/Shop State' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default"
                      
                      />          

                      <TextInput    
                      onChangeText={text => setFormData({...formData, country: text })}
                      placeholder='Office/Shop Country' 
                      style={styles.input}
                      autoCapitalize="none"
                      keyboardType="default"
                      
                      />          
                    </View>  


                    <View  
                    style={[styles.input2,  ]}
                    >  
                        <PaperSelect
                          label="Categories" 
                          value={categories.value}
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
                        
                

                        <View  
                        style={[styles.input2,  ]}
                        >  
                        <PaperSelect
                          label="Sub Categories" 
                          value={subcategories.value}
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
                    



                        <TextInput 
                        onChangeText={text => setFormData({...formData, facebookPage: text })}
                        placeholder='Facebook Page'  
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="default"
                        />


                        <View  
                        style={[styles.input2,  ]}
                        >  

                        <PaperSelect
                          label="Gender" 
                          value={gender.value}
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
                          checkboxLabelStyle={{ color: '#3357A0', fontWeight: '700'  }}
                          textInputMode="flat" 
                          
                        />
                        </View>  

                        <TextInput    
                        onChangeText={text => setFormData({...formData, marketerCode: text })}
                        placeholder='Marketer Code' 
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        />


                        <TextInput    
                        onChangeText={text => setFormData({...formData, username: text })}
                        marketerCode
                        placeholder='Phone No' 
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                        />



                        <TextInput    
                        onChangeText={text => setFormData({...formData, password: text })}
                        placeholder='Password' 
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        />

                        <TextInput    
                        onChangeText={text => setFormData({...formData, password_2: text })}
                        placeholder='Confirm Password' 
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                        
                        />

                        <TextInput    
                        onChangeText={text => setFormData({...formData, email: text })}
                        placeholder='Email ' 
                        style={styles.input}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        />
        
            
                        <View  style={{color: 'white', marginTop: 50}}>
                        <Text style={{color: '#3357A0',fontSize: 16,fontWeight: '700', textDecorationLine:'underline'}}>Tearms & Conditions</Text>
                        <Text  style={{color: '#3357A0',fontSize: 14}}> On clicking Create Account button you agree to our terms and conditions.
                       
                          <TouchableOpacity  onPress={() => Linking.openURL('https://gse-mart.com/terms-&-policies.php')}  >
                          <Text style={{color: '#f00',fontSize: 14,textDecorationLine:'underline'}}> see terms and conditions here</Text>
                          </TouchableOpacity>   
                        </Text> 
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
/*
  return (
    <View style={styles.container}>
      <Headline style={{ marginBottom: 10 }}>
        React Native Paper Select
      </Headline>
      <PaperSelect
        label="Select Gender"
        value={gender.value}
        onSelection={(value: any) => {
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
        dialogTitleStyle={{ color: 'red' }}
        checkboxColor="yellow"
        checkboxLabelStyle={{ color: 'red', fontWeight: '700' }}
        textInputBackgroundColor="yellow"
        textInputColor="red"
      />
      <PaperSelect
        label="Select Colors"
        value={colors.value}
        onSelection={(value: any) => {
          setColors({
            ...colors,
            value: value.text,
            selectedList: value.selectedList,
            error: '',
          });
        }}
        arrayList={[...colors.list]}
        selectedArrayList={colors.selectedList}
        errorText={colors.error}
        multiEnable={true}
        textInputMode="flat"
        searchStyle={{ iconColor: 'red' }}
      />
*/
const styles = StyleSheet.create({
header: {  
  flexDirection: 'row',
  backgroundColor: '#c908bd',
  width: '100%',
  paddingTop: 40,
  paddingBottom: 20,
  
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingHorizontal: 0
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
paddingLeft: 20,
borderRadius: 5,
marginTop: 15,
height: 60,
borderRadius: 10,
borderWidth: 2,
borderColor: '#eeeeee',
borderBottomWidth: 5,
borderBottomColor: '#777777'
},
input2: {
  fontSize:15,
  backgroundColor: 'white',
  paddingHorizontal: 15,
  paddingLeft: 20,
  borderRadius: 5,
  marginTop: 15,
  height: 70,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#eeeeee',
  borderBottomWidth: 5,
  borderBottomColor: '#777777'
  },
buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
   
},

loading: {
  flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'white',
},



})
