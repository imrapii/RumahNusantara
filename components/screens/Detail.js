import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

const Detail = ({navigation}) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuiz();
  }, []);
  
  const getQuiz = () => {
    axios.get(`https://ed75-182-2-38-86.ngrok-free.app/api/materi`)
    .then((res)=>{
      setQuizzes(res.data);
      console.log(res.data)
    })
    .catch((error)=>console.log(error))
  }

  return (
    <View style={{ backgroundColor: "#FF8243", flex: 1 }}>
      <View
        style={{
          paddingVertical: 30,
          paddingHorizontal: 20
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/back.png")}></Image>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{ alignItems: "center", fontSize: 24, fontWeight: "600" }}>
            List Rumah Adat
        </Text>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {quizzes?.map((v, i) => (
            <TouchableOpacity style={{
              borderColor: "#00000", borderWidth: 1,  padding: 20, marginTop: 10, borderRadius: 10, width: 350, justifyContent: 'center'}}
              key={i}
              onPress={() => navigation.navigate("Materi", {materi:v?.id})}>
              <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>{v?.nama}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
