import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

class Soal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ backgroundColor: '#273032', flex: 1 }}>
                <View style={{ marginTop: 50, marginLeft: 32, flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 48, height: 48, backgroundColor: "#162023", alignItems: "center", justifyContent: "center", borderRadius: 8, padding: 12 }}>
                        <Image source={require('../assets/BackQZ.png')} style={{ width: 10, height: 18 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 20, marginLeft: 16 }}>
                        Quiz
                    </Text>
                </View>

                <View style={{ backgroundColor: "#273032", width: "100%", height: 75, marginTop: 60, marginBottom:16, marginLeft:32, bottom: 0, left:0, position:"absolute"}}>
                    <TouchableOpacity style={{backgroundColor: "#162023", width:110, height:46, borderRadius: 16, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{color:"white", padding:12}}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Soal;