import React from 'react';
import { ScrollView, FlatList,View,Button} from 'react-native';
import Card from '../components/card'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../style/homescreen'
import { StackActions, NavigationActions } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'List of Patients',
    
  }

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  

  componentDidMount() {
    firebase.database().ref('user').on('value', (snapshot) => {
        let data = snapshot.val()
        var defaultdata = {
          email: '',
          date: '',
          desc: '',
          first_name: '',
          pic: '',
          time: ''
        }
  
        if(data == null){
          this.setState({data : defaultdata})
        }else{
          let items = Object.values(data)
          this.setState({ data: items })
      
        }
        
    }
  
    )
}
//asd
  // deleteuser(name) {
   
  //   firebase.database().ref('user').orderByChild('first_name').equalTo(name).once('child_added',
  //   (snapshot) => {
  //       firebase.database().ref('user').child(snapshot.key).remove()  
  //   })
  // }
  
  callupdate(item) { 
  this.props.navigation.navigate('Update', {itemx:item })
}

signout(){
      const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });
      this.props.navigation.dispatch(resetAction);
  
  
 }

  render() {
    return (
    
    <ScrollView  >
        <View style={style}>
        <FlatList data={this.state.data}
          renderItem={({ item }) => <TouchableOpacity 
            onPress={() => this.callupdate(item)}><Card name={item.first_name} date={item.date} img={{ uri: item.pic }} desc={item.desc}
            /></TouchableOpacity>
          }
        />
        <Button title ='CreatUser' onPress={()=> this.props.navigation.navigate('Setting')}></Button>
        <Button title ='Sign out' onPress={()=> this.signout()}></Button>
        </View>


      </ScrollView>
      
    );
  }

}

