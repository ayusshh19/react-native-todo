import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Startpage({ navigation }) {
    // console.log(navigation)
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 5000);
    }, [])
    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={require("../assets/logo.png")} alt={'hello'}
            />
            <Text style={styles.text}>
                Welcome user!
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#302b63'
        

    },
    logo: {
        width: '80%',
        height: '50%',
        resizeMode:'cover'
        //    backgroundColor:'#fff'
    },

    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})