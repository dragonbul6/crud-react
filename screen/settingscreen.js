import React from 'react';
import { Text, View, ScrollView, Button, TextInput,ActivityIndicator} from 'react-native';
import firebase from 'firebase'

export default class setting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email:'',password:'',loading:false,error:''}
    }

    submitOrder() {
        const {email , password} = this.state
        this.setState({loading:true})
       firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>this.props.navigation.goBack())
       .catch((error)=>{
        let errorCode = error.code
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          this.onLoginFailure.bind(this)('Weak password!')
        } else {
          this.onLoginFailure.bind(this)(errorMessage)
        }
       })
    }
    onLoginFailure(errorMessage) {
        this.setState({ error: errorMessage, loading: false })
      }

    renderButton(){
        if(this.state.loading){
            return(
                <ActivityIndicator />
            )
        }else{
            return(
                <Button onPress={() => this.submitOrder()}title="Add data"color="#841584"/>
            )
        }
    }

    render() {
        let stylex = {
            borderWidth: 1, borderColor: 'gray', marginBottom: 5
        }

       

        return (
            <ScrollView>
                <View style={{ padding: 20, marginTop: 50 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Create User </Text>

                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} 
                        placeholder='E-mail' onChangeText={(email) => this.setState({ email: email })} ></TextInput>
                    </View>
                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} 
                        placeholder='password' onChangeText={(password) => this.setState({ password: password })}></TextInput>
                    </View>
                   
                    <View style={{ borderWidth: 1, backgroundColor: '#ffe6ff' }}>
                        {this.renderButton()}
                    </View>
                    <View>
                    <Text style={{color:'red'}}>{this.state.error}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
