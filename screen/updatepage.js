import React from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import firebase from 'firebase'


export default class update extends React.Component {
    static navigationOptions = {
        title: 'Update Time',

    }
    constructor(props) {
        super(props)
        const item = this.props.navigation.state.params.itemx
        this.state = {item : item , time : '' }
        
    }
    updateuser(item) {
        var newData = {
            time : this.state.time
          }
        firebase.database().ref('user').orderByChild('first_name').equalTo(item.first_name).once('child_added',
            (snapshot) => {
                firebase.database().ref('user').child(snapshot.key).update(newData).then(function(){
                    alert("Data saved successfully.")
                }).catch(function(error){
                    alert(error)
                })
                
            })
            this.props.navigation.goBack()

    }

    render() {
        let stylex = {
            borderWidth: 1, borderColor: 'gray', marginBottom: 5
        }

        return (
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',marginBottom:20 }}> Update </Text>

                    <View style={stylex}>
                        <TextInput style={{ fontSize: 15, padding: 20 }} value={this.state.time} 
                        onChangeText={(time) => this.setState({ time: time })} placeholder='Time'></TextInput>
                    </View>
                    <View style={{ borderWidth: 1, backgroundColor: '#ffe6ff' }}>
                        <Button onPress={() => this.updateuser(this.state.item)} title="Update" />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
