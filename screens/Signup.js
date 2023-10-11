import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert} from 'react-native';
import "@react-navigation/native"
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../config/firebase'

export default function Signup({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignup = () => {
        if(email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Registrado com sucesso!"))
            .catch((err) => Alert.alert("Registro mal sucedido!", err.message));
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/background.jpg')} style={{position: 'absolute', top: -700, left: -1300}}/>
            <View style={styles.conteudo}>

                <Text style={{fontSize: 40, fontWeight: '600', marginBottom: 35, marginTop: 60, color: '#DE4C40'}}>Sign Up</Text>

                <TextInput
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={false}
                    value={email}
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={(text) => setEmail(text)}
                    style={{
                        width: 300,
                        textAlign: 'left',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderRadius: 15,
                        fontSize: 20,
                        borderColor: '#DE4C40',
                        padding: 8,
                        paddingLeft: 20
                    }}
                />

                <TextInput
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={false}
                    value={password}
                    textContentType='password'
                    onChangeText={(text) => setPassword(text)}
                    style={{
                        width: 300,
                        textAlign: 'left',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderRadius: 15,
                        fontSize: 20,
                        borderColor: '#DE4C40',
                        padding: 8,
                        paddingLeft: 20
                    
                    }}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Sign Up!</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', gap: 5}}>
                    <Text>You already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color:'#DE4C40'}}>Login!</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    conteudo: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        Button: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        backgroundColor: '#fff',
        borderTopStartRadius: 80,
        
    },
    button: {
        backgroundColor: '#DE4C40',
        width: '75%',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        padding: 10

    }
})