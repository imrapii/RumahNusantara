import React, { Component } from "react";
import {View, Text, TouchableOpacity} from  'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FF8243', alignItems: 'center', justifyContent: 'center'}}>
                <Text>Detail Page</Text>
                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Detail;