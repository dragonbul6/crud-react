import React from 'react'
import {View} from 'react-native'
import firebase from 'firebase'
import Treatmentpage from '../../components/Treatmentpage'

export default class Treatment extends React.Component{
    
    static navigationOptions = {
        title: 'Treatment',
        
      }
    constructor(props){
        super(props)
        const {id} = this.props.navigation.state.params
       this.state = {id : id,data : []}
    }
    
    componentWillMount(){
      firebase.database().ref('treatment/'+this.state.id).once('value' ,(snapshot) => {
        this.setState({data : snapshot.val()})
      })
    }

    render(){
        return(
           
               <Treatmentpage name = {this.state.data.name_disease} 
               pic = {{uri : this.state.data.pic}} 
               web = {this.state.data.web} 
               desc = {this.state.data.desc}/>
           
        )
    }
}