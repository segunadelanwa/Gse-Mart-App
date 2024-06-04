import React, { Component } from 'react';
import { Image, View,Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { getAticles } from '../../service/news'


export default class DataItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }
  }

componentDidMount() {
getAticles().then(data => {
  this.setState({
   isLoading: false,
   data: data
  });
}, error => {
    Alert.alert('Error', 'Something went wrong!');
    }
 )
}



  render() {
    // console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator  animating = {this.state.isLoading} />
        <Text style={{marginTop: 10}}>Please Wait..</Text>
      </View>
    ): (

      <List 
              dataArray = {this.state.data}
              renderRow = {(item ) => {
                return(
                  <DataItem data={item}  />
                )
              }}
      />
    )
    
        return (
          <View style={styles.ContainerCard}>
           
            
               <Card>
    
                <CardItem>
                 <Text>{this.data.title}</Text> 
                </CardItem>
    
                <CardItem cardBody>
    
                <Image  
                source={{ uri: this.data.urlToImage}} 
                  style={{height: 150, width: '100%'}}
                  />
    
                </CardItem>
               
                <CardItem>
                  <View>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>{this.data.description}</Text>
                    </Button>
                  </View>
             
                 
                </CardItem>
    
    
              </Card>
            
          </View>
        );

  }
}

 
export const styles = StyleSheet.create({

  ContainerCard: {
 marginTop: 0,

   }, 
  
 

 });
//  source={require('./../../../assets/logo.png')} 
 
