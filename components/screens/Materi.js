import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';

class Materi extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{backgroundColor:'#FF8243', flex: 1,}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal:20}}>
                    <TouchableOpacity style={{ marginTop:10}} onPress={() => this.props.navigation.navigate('Detail')}>
                        <Image source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ 
                        backgroundColor: 'white',
                        flex: 1,
                        borderRadius: 15,
                        marginTop: 200,
                        alignItems: 'center'
                    }}>
                </View>
            </View>
        )
    }
}

export default Materi;