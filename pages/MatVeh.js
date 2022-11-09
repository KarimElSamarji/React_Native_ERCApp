import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Vehicule from '../components/Vehicule'

export default function MatVeh() {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Select Your Vehicule</Text>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Vehicule
                        VehNbr='101'
                        VehDesc='Hundai 2000' />
                    <Vehicule
                        VehNbr='103'
                        VehDesc='Hundai 2000' />
                    <Vehicule
                        VehNbr='105'
                        VehDesc='Hundai 2000' />
                </View>
                <View>
                    <Vehicule
                        VehNbr='102'
                        VehDesc='Hundai 2000' />

                    <Vehicule
                        VehNbr='104'
                        VehDesc='Hundai 2000' />

                    <Vehicule
                        VehNbr='106'
                        VehDesc='Hundai 2000' />
                </View>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff5f5',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    }
})