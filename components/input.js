import React from 'react';
import { Text, View,TextInput} from 'react-native';




export default class input extends React.Component {
    
     render() {

       return (
        <View style={{borderWidth:1,borderColor:'gray',marginBottom:5}}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = {this.props.title}></TextInput>
        </View>
       )
    }
  }