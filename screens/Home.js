import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'

const Home = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name='search' size={24} color={'#D7D7D9'} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image source={require('../assets/eu.jpeg')} style={{width: 40, height: 40, marginRight: 15, borderRadius: 40, borderWidth: 1, borderColor: '#DE4C40'}}/>

            ),
        });
    },[navigation]);


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.chatButton}>
                <Entypo name='chat' size={28} color={'#FFF'}/> 
            </TouchableOpacity>
        </View>
    );

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#FFF'
    },
    chatButton: {
        backgroundColor: '#DE4C40',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginBottom: 40
    }
})