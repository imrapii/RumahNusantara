import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import axios from "axios";

const Materi = ({navigation, route}) => {
    const { materi } = route.params;

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuiz();
  }, []);
  
  const getQuiz = () => {
    axios.get(`https://ed75-182-2-38-86.ngrok-free.app/api/materi`)
    .then((res)=>{
      setQuizzes(res.data);
    })
    .catch((error)=>console.log(error))
  }
 const value = quizzes?.find((v) => v.id==materi)
 console.log(value)

  return (
    <View style={{backgroundColor:'#FF8243', flex: 1,}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal:20}}>
        <TouchableOpacity style={{ marginTop:10}} onPress={() => navigation.navigate('Detail')}>
          <Image source={require('../assets/back.png')}></Image>
        </TouchableOpacity>
        <Image source={{uri: `${value?.image}`}}></Image>
      </View>
      <View
        style={{ 
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 15,
          marginTop: 200,
          alignItems: 'center'
        }}>
                <Text style={{fontWeight: '800', fontSize: 20, marginTop:15}}>
                    {value?.nama}
                </Text>
                <Text style= {{ fontWeight: '500', fontSize: 18, marginTop: 10, margin: 20, textAlign: 'justify'}}>
                    {value?.penjelasan}
                </Text>
      </View>
    </View>
  );
}

export default Materi;
