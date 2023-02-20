import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

class Jateng extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{backgroundColor:'#273032', flex: 1}}>
                <View style={{paddingVertical: 40, paddingHorizontal:20}}>
                <TouchableOpacity>
                    <Image source={require('../assets/BackQZ.png')} style={{width: 60, height: 60}}></Image>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/viewqz.png')} style={{ height: 600, width: 335}}></Image>
                </View>
                </View>
            </View>
        )
    }
}

export default Jateng;