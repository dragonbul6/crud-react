import React from 'react'
import {View,Text,Button} from 'react-native'

export default class Signout extends React.Component{
   
    
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
            <Text style={{marginTop : 50}}>SignOut ! </Text>
            <Button title = 'Landpage' onPress={()=>navigate('Landpage')}></Button>
            </View>
        )
    }
}