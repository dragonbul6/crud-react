import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class viewUser extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ marginBottom: 10 }}>
                    <Text style={style.Text_hi}>Hello: {this.props.name}</Text>
                </View>
               <View>
                <Image style ={style.Image_style} source = {this.props.pic} ></Image>
               </View>
                <View style = {style.container_text}>
                    <Text style = {style.Text_desc}>{this.props.desc}</Text>
                </View>

                <View style = {style.container_text}>
                    <Text style = {style.Text_desc}>{this.props.date}</Text>
                </View>
            </View>
        )
    }

}

const style = StyleSheet.create({
    Text_hi: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'

    },
    Image_style: {
        height:250,
        
    },
    Text_desc: {
        fontSize: 18,
        textAlign: 'right',
        margin : 5
    },
    container_text : {
        flexDirection:'row',
        marginTop:10,
        flex : 2
    }
})