import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('AttendenceScreen',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("Daniel")}>
            <Text style={styles.buttonText}>Daniel Thomas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("Henry")}>
            <Text style={styles.buttonText}>Henry Bagshaw</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("Michael")}>
            <Text style={styles.buttonText}>Michael Jonathan</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("Justin")}>
            <Text style={styles.buttonText}>Justin Watson Mathew</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})