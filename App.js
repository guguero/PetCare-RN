
import React, {Fragment} from 'react';
import Signup from './src/pages/Signup/index';
import Opening from './src/pages/Opening/index';
import Signin from './src/pages/Signin/index';
import Home from './src/pages/Home/index';
import MostRated from './src/pages/MostRated/index';
import Company from './src/pages/Company/index';
import Profile from './src/pages/Profile/index';
import Addresses from './src/pages/Addresses/index'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
    InitialPage: {
      screen: Opening,
      navigationOptions: {
        header: null
      }
    },
    Signup: Signup,
    Signin: Signin,
    Home: { 
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    MostRated: MostRated,
    Company: Company,
    Profile: Profile,
    Addresses: Addresses
});

class App extends React.Component {
  render(){
    return (
      <AppStackNavigator />
    );
  }
}


export default createAppContainer(AppStackNavigator);


