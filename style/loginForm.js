import {StyleSheet} from 'react-native'

export const logincontainner = StyleSheet.create({
    container : {
        borderWidth : 0.5,
        borderColor : 'gray',
        marginTop:150,
        alignItems:'center',
        backgroundColor : '#74b9ff'
    },
    text : {
        fontSize:18,
        fontWeight:'bold',
    },
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
      },
      buttomStyle : {
        borderWidth:1,
        padding:10
      }


})