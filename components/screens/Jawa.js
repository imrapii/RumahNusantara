import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

class Jawa extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{backgroundColor:'#FF8243', flex: 1}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Image source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <Image source={require('../assets/list.png')}></Image>
                </View>
                <View style={{alignItems: 'center', marginTop: 5}}>
                    <Text style={{fontSize: 32, fontWeight: 'bold'}}>Jawa</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Jateng.png')} style={{ width: 170, height: 188}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Jabar.png')} style={{ width: 170, height: 188}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Jawa;