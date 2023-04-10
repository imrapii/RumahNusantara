import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const Detail = ({navigation}) => {
  const datta = [
    {id: 1, nama: 'Rumah Bolon'},
    {id: 2, nama: 'Rumah Gadang'},
    {id: 3, nama: 'Rumah Selaso Jatuh Kembar'},
    {id: 4, nama: 'Rumah Limas'},
    {id: 5, nama: 'Rumah Panjang'},
    {id: 6, nama: 'Rumah Batang'},
    {id: 7, nama: 'Rumah Lamin'},
    {id: 8, nama: 'Rumah Mandar'},
    {id: 9, nama: 'Rumah Tongkonan'},
    {id: 10, nama: 'Rumah Pewaris'},
  ]

  return (
    <View style={{ backgroundColor: "#FF8243", flex: 1 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/back.png")}></Image>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ alignItems: "center", fontSize: 24, fontWeight: "600" }}>
            List Rumah Adat
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {datta?.map((v, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate("Materi")}>
            <Text style={{fontSize: 16}}>{v?.nama}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Detail;
