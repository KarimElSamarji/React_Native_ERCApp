import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Vehicule({image,VehNbr,VehDesc}) {
    return (
        <View style={styles.background}>
            <View style={styles.ill}>
                <Image source={image}/>
            </View>
            <View style={styles.databack}>
                <Text style={styles.vehnbr}>{VehNbr}</Text>
                <Text style={styles.vehdesc}>{VehDesc}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        height: 300,
        width: 200,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: 'red',
        shadowRadius:40,
        borderRadius: 40,
        margin: 10
    },
    ill:{
        flex:0.65,
        backgroundColor:'black',
        borderRadius:40
    },
    databack:{
        flexDirection:'column',
        flex:0.35,
        justifyContent:'center',
        alignItems:'center'
    },
    vehnbr:{
        color:'red',
        fontWeight:'bold',
        fontSize:20
    },
    vehdesc:{
        color:'red'
    }
})