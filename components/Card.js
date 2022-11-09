import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card({ image, title, desc,fct }) {
    return (
        <TouchableOpacity style={styles.container} onPress={fct}>
            <View style={styles.cardtop}>
                <Image source={image} style={{ width: '100%', height: '100%'}} />
            </View>
            <View style={styles.cardbottom}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 ,marginTop:7 }}>{title}</Text>
                <Text style={{color:'#d6d2d2'}}>{desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: 'grey',
        shadowOpacity: 1,
        height: 280,
        width: 190,
        borderRadius: 20,
        marginBottom: 15,
        overflow: 'hidden'
    },
    cardtop: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardbottom: {
        flex: 0.4,
        backgroundColor: '#cf2b1f',
        borderTopRightRadius: 20,
        elevation: 10,
        shadowColor: 'red',
        shadowOpacity: 1,
        paddingHorizontal: 5
    }
})
