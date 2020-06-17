import React from 'react';
import { Text, View,Button} from 'react-native';
import WebView from './webView'




export default class ViewCard extends React.Component {
    
     render() {

       return (
         <View style={{marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Disease: {this.props.disease}</Text>
            <WebView url = 'https://www.thaihealth.or.th/Content/38230-ดูแลตัวเองอย่างไร%20เมื่อเป็นเบาหวาน.html'></WebView>
    
            </View> 
         
         
       );
    }
  }