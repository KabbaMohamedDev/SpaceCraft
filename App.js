import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput,SafeAreaView,Button,ScrollView,FlatList} from "react-native";
export default function App() {
  return (
  
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.block1}>
      <Text style={styles.paragraph}>
        Welcome to {'\n'} Starport
      </Text>
     </View>
     <View style={styles.block2}>
     <SafeAreaView>
      <TextInput
        style={styles.input}
         placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
      />
     
    </SafeAreaView>
    
     </View>
     <View style={styles.block2}>
      <Button
  title="Login"
  color="#8a2be2"
  accessibilityLabel="Login"/>
      </View>
      <Text style={styles.text1}
       numberOfLines={5}>Read conditions and tearms</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin:20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff'
  },
  block1:{
          backgroundColor:'#8a2be2',
          width:'100%',
          borderColor:'#000000',
           borderWidth: 3,
          borderRadius:0,
  },
  block2:{
    margin:15,
    width:'80%',
    padding:10,
    textAlign: 'center',
},
input:{
  textAlign:"center",
  borderColor:'#000000',
         borderWidth: 3,
         margin:10,
         color:'#000000',
         height:50,
},
text1:{
        textAlign:"center",
        color:'#808080'
}
  
  });
