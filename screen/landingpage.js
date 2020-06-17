import React from 'react';
import { StyleSheet,View,Button } from 'react-native';

export default class Landing extends React.Component {
 
     
  
  render() {
      return (
       <View style={style.guid} >
            <View style={style.TextField}>
            <Button  title="login" onPress={()=>this.props.navigation.navigate('Login') }></Button>  
            </View>
            <View style={style.TextField}>
            <Button style={{marginTop:20}} title="Admin Tools" onPress={()=>this.props.navigation.navigate('Home')} ></Button>
            </View>  
       </View>
        
      )
     }
  }

  const style = StyleSheet.create({
    guid : {
      
      alignItems:'center',
      marginTop:300,
      
    },
    TextField: {
      borderWidth:1,
      marginTop:20
      
    }
  })