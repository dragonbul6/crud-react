import React from 'react'
import { Button, ScrollView, View ,Text } from 'react-native'
import firebase from 'firebase'
import ViewUser from '../../components/viewUser'
import { StackActions, NavigationActions } from 'react-navigation';

export default class user_home extends React.Component {
    //update
    constructor(props) {
        super(props)
        this.state = { data: [], status: false }
    }
    static navigationOptions = {
        title: 'Home of User',
    }
    componentDidMount() {
        var uid = firebase.auth().currentUser.uid
        firebase.database().ref('user/' + uid)
            .on('value', (snapshot) => {
                var data = snapshot.val()
                if (data !== null) {
                    this.setState({ data: snapshot.val(), status: true })
                } else {
                    this.props.navigation.navigate('usersetting')
                }
            })
        

    }
    renderItem(Id) {
        var name = ''
        if (Id == 0) {
            name = "Carcinoma"
        } else if (Id == 1) {
            name = "Diabetes"
        } else if (Id == 2) {
            name = "Renal failure"
        } else if (Id == 3) {
            name = "Heart disease"
        }

        return name
    }
    renderButton() {
        if (this.state.status) {
            return (
                <Button style={{ padding: 50 }}
                    title='Treatment'
                    onPress={() => this.props.navigation.navigate('Treatment', { id: this.state.data.date })} />
            )
        }
    }

    rendertime() {
        if (this.state.status) {
            return (
                <Text
                    style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'right' }}>
                    Your next Schedul is : {this.state.data.time}
                </Text>
            )
        }
    }
    
   signout(){
    firebase.auth().signOut().then(()=>{
        alert('Sign out !')
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    })
    
   }
   
    render() {
        
        return (
            <ScrollView>
                <View>
                    {this.rendertime()}
                    <ViewUser name={this.state.data.first_name}
                        desc={this.state.data.desc}
                        date={this.renderItem(this.state.data.date)}
                        pic = {{uri : this.state.data.pic}} />

                    {this.renderButton()}

                    <Button title='Sign Out' onPress={()=> this.signout()}></Button>


                </View>
            </ScrollView>
        )
    }

}