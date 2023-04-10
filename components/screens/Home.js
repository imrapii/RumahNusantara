import React, { Component } from "react";
import {View, Text, TouchableOpacity, Image} from  'react-native';
import { AntDesign } from '@expo/vector-icons';

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
                        borderRadius: 15,
                        marginTop: 90,
                        alignItems: 'center',
                    }}>
                        
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')} 
                    style={{ flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor: 'white', borderColor: '#000000', borderWidth: 1, margin: 16, borderRadius: 10, marginTop: 36}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Image source={require('../assets/quiz.png')}/>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 24}}>Quiz</Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} 
                    style={{ flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor: 'white', borderColor: '#000000', borderWidth: 1, margin: 16, borderRadius: 10}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Image source={require('../assets/materi3d.png')}/>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontWeight: '500', fontSize: 24}}>Materi</Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>


                </View>
                
            </View>
        )
    }
}

export default Home;