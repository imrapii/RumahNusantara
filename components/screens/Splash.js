import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

import { StackActions } from "@react-navigation/native";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 3000);
    }
    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                <Image source={require('../assets/SplashLogo.png')}
                style={{width: 300, height: 270}}></Image>
            </View>
        )
    }
}

export default Splash;