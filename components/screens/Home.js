import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{backgroundColor:'#FF8243', flex: 1,}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal:20}}>
                    <Text style={{fontSize: 26, fontWeight: 'bold'}}>Home</Text>
                    <TouchableOpacity style={{ marginTop:10}} onPress={() => this.props.navigation.navigate('Detail')}>
                        <Image source={require('../assets/list.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/viewhome.png')}></Image>
                </View>
                <View
                    style={{ 
                        backgroundColor: 'white',
                        flex: 1,
                        borderRadius:15,
                        marginTop:144,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity 
                    style={{
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        shadowRadius: 10,
                        shadowOffset: 2,
                        marginTop: -85
                    }}>
                        <Image source={require('../assets/CardGadang.png')}
                        style={{width: 380, height: 215}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        shadowColor: 'black',
                        shadowOpacity: 1,
                        shadowRadius: 10,
                        shadowOffset: 2,
                        marginTop: 10
                    }}>
                        <Image source={require('../assets/CardBetang.png')}
                        style={{width: 380, height: 215}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Home;