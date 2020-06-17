import React from 'react';
import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation';
import Home from './screen/homescreen'
import setting from './screen/settingscreen'
import update from './screen/updatepage'
import loginForm from './screen/user/loginform'
import firebase from 'firebase'
import user_home from './screen/user/user_home'
import settingUser from './screen/user/settingUser'
import Treatment from './screen/user/treatment'


const Homeupdate = createStackNavigator({
  Home:{screen:Home},
  Update:{screen:update},
  Setting : {screen : setting},
  Login : {screen : loginForm}
})

const usernavigator = createStackNavigator({
  User_home : {screen : user_home},
  Treatment : {screen : Treatment},
  usersetting : {screen : settingUser},
  Login : {screen : loginForm}
})

const Loginnavigator = createSwitchNavigator({
  Login : {screen : loginForm},
  User_home : {screen : usernavigator},
  Home : {screen : Homeupdate}
})

const AppContainer = createAppContainer(Loginnavigator)
export default class App extends React.Component {
  state = { loggedIn: null };
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyB1MhJHhHzbrBBl996Ksl6JvUK86-TBTqk",
      authDomain: "myprj142.firebaseapp.com",
      databaseURL: "https://myprj142.firebaseio.com",
      projectId: "myprj142",
      storageBucket: "myprj142.appspot.com",
      messagingSenderId: "553955211760"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }
  
  render() {
    return (
    
      <AppContainer />
      
     
    );
  }
}


