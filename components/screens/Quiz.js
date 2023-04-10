import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ backgroundColor: '#273032', flex: 1 }}>
                <View style={{ marginTop: 50, marginLeft: 32, flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}
                    style={{ width: 48, height: 48, backgroundColor: "#162023", alignItems: "center", justifyContent: "center", borderRadius: 8, padding: 12 }}>
                        <Image source={require('../assets/BackQZ.png')} style={{ width: 10, height: 18 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 20, marginLeft: 16 }}>
                        Start Quiz
                    </Text>
                </View>

                <View style={{ backgroundColor: "#162023", width: "100%", height: 711, marginTop: 60, borderRadius: 40 }}>
                    <ScrollView horizontal={false}>
                        <Text style={{color: "white", fontSize: 14, marginTop:32, marginLeft:55, marginRight:55, textAlign: 'justify'}}>
                            Uji pemahaman Anda tentang konsep ini dengan menjawab beberapa pertanyaan singkat.
                        </Text>
                        <Image source={require('../assets/F25.png')} style={{borderRadius:16, width:326, height:154, alignSelf:"center", marginTop:15, marginBottom: -50}}/>
                        <Text style={{color: "white", fontSize: 14, marginTop:64, marginLeft:55, marginRight:55}}>
                            Total Pertanyaan: 10
                        </Text>
                        <Text style={{color: "white", fontSize: 14, marginTop:12, marginLeft:55, marginRight:55, fontWeight:"bold"}}>
                            Instruksi: 
                        </Text>
                        <Text style={{color: "white", fontSize: 14, marginTop:4, marginLeft:55, marginRight:55, paddingBottom: 120, fontWeight:"400", textAlign: 'justify' }}>
                        Kuis-kuis ini terdiri dari pertanyaan-pertanyaan yang dirancang dengan cermat untuk membantu Anda menilai sendiri pemahaman Anda terhadap informasi yang disajikan mengenai topik-topik yang tercakup dalam modul ini. 
Setelah menjawab satu pertanyaan, klik tombol "Next" di bagian bawah untuk melanjutkan ke pertanyaan berikutnya. Setelah menjawab pertanyaan ke-8, klik "Tutup" di bagian atas jendela untuk keluar dari kuis.
Jika Anda memilih jawaban yang salah untuk sebuah pertanyaan, Anda dapat mencoba lagi sampai Anda mendapatkan jawaban yang benar. Jika Anda mengulang kuis, pertanyaan dan respons masing-masing akan diacak.
                        </Text>
                    </ScrollView>
                </View>

                <View style={{ backgroundColor: "#273032", width: "100%", height: 75, marginTop: 60, borderRadius: 40, position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Soal')}
                    style={{width: 350,height:50, backgroundColor: "#F2954D", borderRadius: 16, alignItems:'center',justifyContent:'center'}}>
                        <Text style={{ color: "white", fontSize: 16,}}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Quiz;