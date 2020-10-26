import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AttendenceScreen from './screens/AttendenceScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  AttendenceScreen : AttendenceScreen,
})

const AppContainer = createAppContainer(AppNavigator)
