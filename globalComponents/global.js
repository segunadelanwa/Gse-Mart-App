import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    header: { 
    width: '100%',
    flexDirection: 'row', 
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#c908bd', 
    marginBottom: 20,
    },
  
    box: {
      backgroundColor: 'white',
      marginTop: 20, 
      borderColor: '#c908bd', 
      borderWidth: 1, 
      borderRadius: 5,
  },
    container: {
     
      alignItems: 'center', 
      justifyContent: 'center'
    },
 

    buttonAutowidth: {
    backgroundColor: '#c908bd',
    width: '20%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    },
          
    button: {
    backgroundColor: 'black',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    buttonNoradius: {
    width: '100%',
    paddingVertical: 15, 
    alignItems: 'center',

    },
    buttonOutline1: {
      backgroundColor:  '#c908bd',
      marginTop: 5, 
      borderColor: '#777777',
      borderWidth: 1,
    },
          
    buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5, 
    borderColor: 'black',
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

    buttonContainer:{
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      
      },     

  });