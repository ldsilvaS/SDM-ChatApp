import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert} from 'react-native';
import "@react-navigation/native"
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, database} from '../config/firebase'
import { AntDesign, Feather } from '@expo/vector-icons';


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
            <Image source={require('../assets/background.jpg')} style={{position: 'absolute', top: -50, left: 0, width: 420, height: 400}}/>
            <View style={styles.conteudo}>

                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 0, marginBottom: 70, marginTop: 20}}>
                        <Text style={{fontSize: 45, color: '#343333'}}>Registrar-se!</Text>
                        <Text style={{fontSize: 18, marginLeft: 0}}>
                            Chat<Text style={{color: '#1E73F4'}}> Express</Text>
                        </Text>
                </View>

                


                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#343333'}
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
                        borderRadius: 10,
                        fontSize: 20,
                        padding: 12,
                        paddingLeft: 20,
                        backgroundColor: '#D9D9D9'
                    }}
                />

                <TextInput
                    placeholder='Password'
                    placeholderTextColor={'#343333'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={false}
                    value={password}
                    textContentType='password'
                    onChangeText={(text) => setPassword(text)}
                    style={{
                        width: 300,
                        textAlign: 'left',
                        borderRadius: 10,
                        fontSize: 20,
                        padding: 12,
                        paddingLeft: 20,
                        backgroundColor: '#D9D9D9'
                    
                    }}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <AntDesign name='login' size={24} color={'#343333'} style={{marginRight: 0}}/>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
                    <Text>Você já tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color:'#1E73F4'}}>Login!</Text>
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
        height: '70%',
        position: 'absolute',
        Button: 0,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: '#fff',
        borderTopStartRadius: 80,
        
    },

    button: {
        position: 'relative',
        left: 110,
        backgroundColor: '#1E73F4',
        width: '20%',
        height: 45,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        padding: 10

    }
})