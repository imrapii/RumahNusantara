import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{backgroundColor:'#FF8243', flex: 1}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 40, paddingHorizontal:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Image source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{alignItems: 'center', fontSize: 24, fontWeight: '600'}}>List Rumah Adat</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Jawa')}>
                        <Image source={require('../assets/CardJawa.png')} style={{width: 317, height: 81}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/CardSumatra.png')} style={{width: 317, height: 81, marginTop: 50}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/CardKalimantan.png')} style={{width: 317, height: 81, marginTop: 50}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/CardSulawesi.png')} style={{width: 317, height: 81, marginTop: 50}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/CardPapua.png')} style={{width: 317, height: 81, marginTop: 50}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Detail;