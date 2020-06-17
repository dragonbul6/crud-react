import React from 'react'
import {Text,View,Button,TextInput,ActivityIndicator,KeyboardAvoidingView} from 'react-native'
import {logincontainner} from '../../style/loginForm'
import firebase from 'firebase'



export default class login extends React.Component{
    constructor(props){
        super(props)
        this.state = {email : '',password : '',error : '',loading:false}
    }
      onButtonPress() {
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        if(this.state.email == 'admin' && this.state.password == '1234'){
          this.props.navigation.navigate('Home')
        }else{
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('User_home'))
          .catch((error) => {
            this.setState({error : 'You do not have account or wrong password',loading:false,password:''})
            
          });
        }
       
      }
     
      
      renderButton() {
        if (this.state.loading) {
          return(
              <View >
                 <ActivityIndicator size={"small"} />
              </View>
          );
        }
        return (
          <Button
            title="Login"
            onPress={this.onButtonPress.bind(this)} 
            style={logincontainner.buttomStyle}
            />
        );
      }
      render(){
        return(
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={logincontainner.container}>
            <Text style = {logincontainner.text}>Email</Text>
            <TextInput style = {logincontainner.buttomStyle}placeholder='user@email.com' value={this.state.email} onChangeText = {(email) => this.setState({email : email})}></TextInput>
            <View style={logincontainner.buttomStyle}>
            <Text style = {logincontainner.text}>Password</Text>
            <TextInput secureTextEntry={true} value={this.state.password} onChangeText = {(password) => this.setState({password:password})} placeholder = 'password'></TextInput>
            </View>
            {this.renderButton()}      
            <Text style={logincontainner.errorTextStyle}>
            {this.state.error}
            </Text>
            
            </View>
        </KeyboardAvoidingView>
           
            
        )
    }

}