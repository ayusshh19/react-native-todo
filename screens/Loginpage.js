import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Image, Pressable, } from 'react-native';
import loginimage from '../assets/login.png'
import {AsyncStorage} from 'react-native';
import axios from 'axios';

export default function Loginpage() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

  const onloginsubmit=async ()=>{
    try {
      console.log('hey')
      await AsyncStorage.setItem('username',username)
      const data=await axios.post('https://app.nativenotify.com/api/notification', {
        appId: 6621,
        appToken: "dugLe69bVbq3JAgIgGflRD",
        title: "Welcome Sir!",
        body: `Hello ${username} We are here to welcome you to our todo app`,
        dateSent: date,
        pushData: { yourProperty: "yourPropertyValue" }
    })
    console.log(AsyncStorage.getItem('username'))

    } catch (error) {
      
    }
  }
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>
        Login !
      </Text>
      <Image source={loginimage} style={styles.login} />
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Username"
        onChangeText={(value) => setusername(value)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Password"
        onChangeText={(value) => setpassword(value)}
      />
      <Pressable title='Login' style={styles.button} onPress={onloginsubmit}>
        <Text style={styles.logintext}>
          Login
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#302b63',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  input: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    fontSize: 20,
    color: '#fff'
  },
  text: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
  },
  login: {
    width: '100%',
    height: '40%'
  },
  button: {
    padding: 15,
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10

  },
  logintext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  }
})
