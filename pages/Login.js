import { View, SafeAreaView, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, Animated, StatusBar } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';
import Home from './Home';
export default function Login({navigation}) {

    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secure, setSecure] = React.useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translation = useRef(
        new Animated.Value(300)
    ).current

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true
        }).start();
    };
    const transKeyOn = () => {
        Animated.timing(translation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }


    useEffect(() => {
        fadeIn();
        transKeyOn();
    }, [])

    return (
        <SafeAreaView style={styles.background}>
            <StatusBar
                backgroundColor='black'
            />
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss} accessible={false}>
                <View style={{ flex: 1 }}>



                    <View style={styles.logoBack}>

                        <View style={styles.logoView}>

                            <Animated.View style={[{ opacity: fadeAnim }]}>
                                <Image source={require('../assets/LOGO.jpg')} style={{ width: 260, height: 260 }} />
                            </Animated.View>

                        </View>
                    </View>

                    <Animated.View style={[styles.dataBack, { transform: [{ translateY: translation }] }]} >
                        <Text style={styles.title}>Login</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <TextInput
                                mode='outlined'
                                label="Username"
                                underlineColor='red'
                                activeUnderlineColor='red'
                                outlineColor='red'
                                activeOutlineColor='red'
                                style={styles.input}
                                value={text}
                                onChangeText={text => setText(text)}
                            />
                            <TextInput
                                mode='outlined'
                                label="Password"
                                underlineColor='red'
                                activeUnderlineColor='red'
                                outlineColor='red'
                                activeOutlineColor='red'
                                style={styles.input}
                                value={password}
                                secureTextEntry={secure}
                                right={<TextInput.Icon name="eye" onPress={() => { setSecure(!secure) }} />}
                                onChangeText={password => setPassword(password)}
                            />

                            <Button
                                mode="contained"
                                onPress={() => navigation.navigate('Home')}
                                color='red'
                                style={styles.button}
                                >
                                Log in
                            </Button>
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff5f5',
    },

    logoBack: {
        flex: 0.5,
        backgroundColor: '#fff5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        backgroundColor: 'white',
        width: 250,
        height: 250,
        borderRadius: 125,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation:20,
        shadowColor:'red',
    },
    dataBack: {
        flex: 0.5,
        backgroundColor: 'white',
        borderTopRightRadius: 100,
        shadowColor: 'black',
        shadowOpacity: 1,
        padding: 10,
        elevation: 30,
        shadowColor: 'red',

    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'bariol'
    },
    input: {
        backgroundColor: '#fff5f5',
        marginTop: 10,
        width: '85%'
    },
    button: {
        margin: 20,
        elevation: 7,
        shadowColor: 'red'
    }
})