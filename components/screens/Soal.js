import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import axios from "axios";

const Soal = ({ navigation }) => {
    const [page, setPage] = useState(1)

    const [quizzes, setQuizzes] = useState([]);

    const [nilai, setNilai] = useState(0);

    useEffect(() => {
        getQuiz();
    }, []);

    const getQuiz = () => {
        axios.get(`https://c3a3-2404-c0-7050-00-807-837.ngrok-free.app/api/quizzes`)
            .then((res) => {
                setQuizzes(res.data);
            })
            .catch((error) => console.log(error))
    }
    const value = quizzes?.find((v) => v.nomor === Number(page));


    const postMateri = async (answer) => {
        return await axios
            .post(
                `https://c3a3-2404-c0-7050-00-807-837.ngrok-free.app/api/jobsheet/one`,
                {
                    quizNomor: page,
                    answer: answer,
                }
            )
            .then((response) => {

                console.log(response);
                return response.data.message
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //button handle function 
    const handleButton = async (answer) => {
        const response = await postMateri(answer);
        setPage(page + 1)
        if (response === "benar") {
            setNilai(nilai + 1)
        }
    };
    if (page == 10) {
        return (
            <View style={{ backgroundColor: '#273032', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{width: '100%'}}>
                        <View style={{ marginTop: 50, marginLeft: 32, flexDirection: "row", alignItems: "center"}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}
                                style={{ width: 48, height: 48, backgroundColor: "#162023", alignItems: "center", justifyContent: "center", borderRadius: 8, padding: 12 }}>
                                <Image source={require('../assets/BackQZ.png')} style={{ width: 10, height: 18 }} />
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: 20, marginLeft: 16 }}>
                                Quiz Result
                            </Text>
                        </View>
                    </View>
                    <View style = {{ alignItems: 'center'}}>
                        <View style={{ backgroundColor: "#162023", width: 285, height: 76, marginTop: 28, borderRadius: 20, justifyContent: 'center', borderWidth: 2, borderColor: '#2F3739' }}>
                            <Text style={{ color: 'white', paddingHorizontal: 25}}>Congratulations You've Completed the Quizz</Text>
                        </View>
                    </View>
                    <View style={{width: 285, height: 150, backgroundColor: '#162023', borderRadius: 16, borderWidth: 2, borderColor: '#2F3739', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 38}}>
                        <View>
                            <Image style={{width:100, height: 100}} source={require('../assets/Ellipse.png')}/>
                            <Text style ={{color: 'white', position: 'absolute', right: 25, top: 35, fontSize: 20}}>{nilai} / 10</Text>
                        </View>
                        <View>
                            <Text style={{color: 'white', paddingLeft: 15, paddingRight: 80}}>
                            Selamat! 
Anda telah lulus tes ini dengan nilai {nilai * 10}%
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: '#162023', height: 70, width: '100%', borderRadius: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../assets/buttonHome.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: '#273032', flex: 1 }}>
            <View style={{ marginTop: 50, marginLeft: 32, flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}
                    style={{ width: 48, height: 48, backgroundColor: "#162023", alignItems: "center", justifyContent: "center", borderRadius: 8, padding: 12 }}>
                    <Image source={require('../assets/BackQZ.png')} style={{ width: 10, height: 18 }} />
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 20, marginLeft: 16 }}>
                    Quiz
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 28 }}>
                <Image style={{ width: 353, height: 167, marginBottom: 15 }} source={{ uri: `${value?.gambar}` }} />
                <View style={{ width: '100%' }}>
                    <Text style={styles.soal}>
                        {value?.quiz}
                    </Text>
                </View>
                <View style={{ backgroundColor: "#162023", width: "100%", height: 711, marginTop: 30, borderRadius: 40 }}>
                    <View style={{ marginLeft: 32, marginTop: 40 }}>
                        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 18, paddingRight: 100, marginBottom: 60 }}>
                            Jawab Pertanyaan diatas dengan benar!
                        </Text>
                        <View style={{ flexDirection: 'column', }}>
                            <TouchableOpacity onPress={() => handleButton("a")} style={{ backgroundColor: '#273032', width: 326, borderRadius: 16, height: 48, justifyContent: 'center', paddingLeft: 20 }}>
                                <Text style={{ color: 'white' }}>A. {value?.option[0]?.a}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleButton("b")} style={{ backgroundColor: '#273032', width: 326, borderRadius: 16, height: 48, justifyContent: 'center', paddingLeft: 20, marginTop: 20 }}>
                                <Text style={{ color: 'white' }}>B. {value?.option[1]?.b}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleButton("c")} style={{ backgroundColor: '#273032', width: 326, borderRadius: 16, height: 48, justifyContent: 'center', paddingLeft: 20, marginTop: 20 }}>
                                <Text style={{ color: 'white' }}>C. {value?.option[2]?.c}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleButton("d")} style={{ backgroundColor: '#273032', width: 326, borderRadius: 16, height: 48, justifyContent: 'center', paddingLeft: 20, marginTop: 20 }}>
                                <Text style={{ color: 'white' }}>D. {value?.option[3]?.d}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    soal: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        paddingRight: 100
    }
});

export default Soal;