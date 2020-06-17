import React from 'react';
import { Text, View, ScrollView, Button, TextInput} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import firebase from 'firebase'


//update
export default class settingUser extends React.Component {

    constructor(props) {
        super(props)
        const email = firebase.auth().currentUser.email
        this.state = { pdate :'',pdesc: '',pname:'',email:email,error:''}
    }

    submitOrder(){
        firebase.database().ref('user/'+firebase.auth().currentUser.uid).set({
            email: this.state.email,
            date: this.state.pdate,
            desc: this.state.pdesc,
            first_name: this.state.pname,
            pic: 'https://lh3.googleusercontent.com/Szq_YQxTW7swO9nEIxAZ56QD_3LHns2K42SZMTpW7_7H9xkY9dEuEPKUmuv3C52dm7cmjTKxPP-wi0kfBpwkL0GwOKqGP8yZyg0=s0',
            time: ''
        }).then(()=>this.props.navigation.goBack())

    }

    renderItem(){
       return( 
        <ModalDropdown  
        textStyle = {fontSize = 15}
        defaultValue = 'Select your Desease '
        onSelect = {(date) => this.setState({pdate : date})}
        options={['Carcinoma', 'Diabetes','Renal failure','Heart disease']}/>
        
       )
    }

    renderButton(){
       
        if(this.state.pdate.trim() == ''){
            return(
               <Text> You need to fill all information !</Text>
            )
        }else{
           return(<Button title = 'Add data' onPress={()=>this.submitOrder()}></Button>) 
        }
    }

    render() {
        let stylex = {
            borderWidth: 1, borderColor: 'gray', marginBottom: 5
        }

       

        return (
            <ScrollView>
                <View style={{ padding: 20, marginTop: 50 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Setting </Text>

                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} 
                        placeholder='Name' onChangeText={(name) => this.setState({ pname: name })} ></TextInput>
                    </View>
                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} 
                        placeholder='Desc' onChangeText={(desc) => this.setState({ pdesc: desc })}></TextInput>
                    </View>

                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} 
                        placeholder={this.state.email} editable={false}></TextInput>
                    </View>
                   <View style={{ fontSize: 15, padding: 20 ,borderWidth: 1, borderColor: 'gray', marginBottom: 5}}>
                   {this.renderItem()}
                   </View>
                   
                    <View style={{ borderWidth: 1, backgroundColor: '#ffe6ff' }}>
                        {this.renderButton()}
                    </View>
                </View>
            </ScrollView>
        )
    }
}
