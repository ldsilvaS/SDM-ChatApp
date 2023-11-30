import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'
import {signOut} from 'firebase/auth';
import { auth, database, storage} from '../config/firebase';

const Home = () => {

    const [avatar, setAvatar] = useState("")
    const [visivel, setVisivel] = useState(false)

    const avatars = [
        require('../assets/avatar1.png'),
        require('../assets/avatar2.png'),
        require('../assets/avatar3.png'),
        require('../assets/avatar4.png')
    ]


    const aparecerSeletor = () => {
        setVisivel(!visivel)
    }

    const desapareceSeletor = () => {
        setVisivel(false)
    }
    

    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name='search' size={24} color={'#343333'} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <View style={styles.seletorAvatar}>
                        
                    <TouchableOpacity onPress={aparecerSeletor}>
                        <View style={{width: 40, height: 40, borderRadius: 35, backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center'}}>
                            <AntDesign name='plus' size={18}/>
                        </View>
                    </TouchableOpacity>
                </View>
            ),
        });
    },[navigation]);

    const onSignOut = () => {
        signOut(auth).catch(error => console.log(error));
    }

    return(
        <View style={styles.container}>

            <View style={styles.rodape}>
                <TouchableOpacity onPress={onSignOut} style={styles.chatButton}>
                    <AntDesign name='logout' size={28} color={'#fff'}/>
                </TouchableOpacity>

                <TouchableOpacity style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginRight: 200}} onPress={aparecerSeletor}>
                    {avatar ? (
                        <Image source={avatar} style={{width: 50, height: 50, borderRadius: 25}}/>
                    ): (
                        <AntDesign name='plus' size={18}/>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.chatButton}>
                    <Entypo name='chat' size={28} color={'#FFF'}/>
                </TouchableOpacity>
                
            </View>

            <Text style={{position: 'absolute', top: '45%', fontSize: 20}}>Nenhuma conversa!</Text>

            {visivel && (
                <View style={styles.seletordeavatar}>
                    <TouchableOpacity style={{position: 'absolute', right: -22, width: 30, height: 30, backgroundColor: '#1E73F4', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}} onPress={(desapareceSeletor)}>
                        <Feather name='x-circle' size={22} color={'#d9d9d9'}/>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        {avatars.map((avatar, index) => (
                            <TouchableOpacity key={index} onPress={() => seletorAvatar(avatar)}>
                                <Image source={avatar} style={{width: 50, height: 50, marginTop: 5}}/>
                            </TouchableOpacity>
                        ))}

                    </View>
                </View>
            )}
            
            
        </View>

        
    );

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    chatButton: {
        backgroundColor: '#1E73F4',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 0,
        marginBottom: 10
    },
    rodape: {
        width: 415,
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#F2F2F2'
    },
    seletorAvatar: {
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        marginRight: 15,
        marginBottom: 8

    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9'
    },
    seletordeavatar: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        width: 260,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#ECECEC'
    }
})