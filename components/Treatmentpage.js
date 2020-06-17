import React from 'react'
import {View,StyleSheet,Image,ScrollView,Linking,Text,Button} from 'react-native'

export default class Treatment_component extends React.Component{
    
   
    
    static navigationOptions = {
        title: 'Treatment',
      }
   
      
    render(){
        return(
           <ScrollView>
           <View style={{flex :1,backgroundColor:'#7befb2'}}>
           <View>
           <Text style = {style.TextHead}>{this.props.name}</Text>
           </View>
           <View>
            <Image source = {this.props.pic} style = {style.image_container}></Image>
            </View>
            <View>
            <Text style ={style.desc_container}>{this.props.desc}</Text>
            </View>
            <View>
                <Button title = "More for Treatment" onPress = {()=> Linking.openURL(this.props.web)}></Button>
            </View>
            </View>
            </ScrollView>
        )

    }

}

const style = StyleSheet.create({
       TextHead : {
            fontSize : 30,
            fontWeight : 'bold',
            textAlign : 'center',
            marginBottom : 20

       },
    image_container : {
            height : 150,
            borderWidth: 1, 
            borderColor: 'black', 
            alignItems:'center',
            marginBottom : 10
            
        },
        desc_container : {
            fontSize : 20,
            textAlign : 'center',
            marginRight : 5,
            marginLeft : 5,
            marginBottom : 20
        },
        web_container : {
            borderColor: 'black', 
            marginRight : 10,
            marginBottom : 10
        }
})