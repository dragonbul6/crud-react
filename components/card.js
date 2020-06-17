import React from 'react';
import { Text, View,Image} from 'react-native';

export default class card extends React.Component {
    
  render() {

       return (
       
         <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'gray',marginBottom:5}}>
            
            <View style={{marginLeft:5,flex:1,borderWidth: 0.5,borderColor: 'gray'}}>
            <Image style={{height:200}} source = {this.props.img}/>
            </View>
            <View style = {{flex:2}}>
            <Text style = {{fontSize : 18 , fontWeight : 'bold'}}>Patient Name: {this.props.name} </Text>
            <Text style={{color:'red',fontSize : 18}}>Disease : {this.props.date}</Text>
            <Text style={{fontSize:14}}>{this.props.desc}</Text>
            </View> 
         
         </View>
        
       );
    }
  }