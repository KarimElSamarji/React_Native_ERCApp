import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Shift({day}) {
    return (
        <TouchableOpacity style={styles.shiftcard}>
            <View style={styles.leftSide}>
                <Text style={styles.day}>{day}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    shiftcard: {
      width: '90%',
      height: 100,
      backgroundColor: 'white',
      borderRadius:30,
      elevation:10,
      shadowColor:'red',
      shadowOffset:1,
      shadowRadius:30,
      flexDirection:'row',
      overflow:'hidden',
      marginBottom:15
    },
    leftSide:{
      backgroundColor:'#cf2b1f',
      flex:0.4,
      justifyContent:'center',
      alignItems:'center'
    },
    day:{
      color:'white',
      fontWeight:'bold',
      fontSize:20
    }
  })