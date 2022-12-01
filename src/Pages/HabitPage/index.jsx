import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SelectHabit from "./SelectHabit";
//import LifeStatus from "../../Components/Common/LifeStatus";

export default function HabitPage({ route }) {
  const navigation = useNavigation();
  const [habitInput, setHabitInput] = useState();
  const [frequencyInput, setFrequencyInput] = useState();

  const {create, habit} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity 
            style={styles.backPageBtn}
            onPress={() => navigation.goBack()}  
          >
            <Image 
                source={require("../../assets/icons/arrowBack.png")}
                style={styles.arrowBack} 
            />
          </TouchableOpacity>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Configurações de hábito</Text>
            <Text style={styles.inputText}>Área</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.area}>{habit?.habitArea}</Text>
            </View>
            <Text style={styles.inputText}>Hábito</Text>
            <SelectHabit habit={habit} habitInput={setHabitInput} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  backPageBtn: {
    width: 40,
    height: 40,
    margin: 25,
  },
  arrowBack: {
    width: 40,
    height: 40,
  },
  mainContent: {
    width: 250,
    alignSelf:"center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#7ed957",
    fontSize: 25,
  },
  inputText: {
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 15,
    color: "white",
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#7ed957",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  area: {
    color: "#BBBBBB",
    fontSize: 15,
  },
});