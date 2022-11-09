import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Shift from '../components/Shift'

export default function AllShifts() {
  return (
    <View style={styles.background}>
      <View style={{ alignItems: 'center', borderBottomColor: '#cf2b1f', borderBottomWidth: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>All Shifts</Text>
      </View>
      <ScrollView >
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Shift
            day='Monday' />
             <Shift
            day='Tuesday' />
             <Shift
            day='Wensday' />
             <Shift
            day='Thursday' />
             <Shift
            day='Friday' />
             <Shift
            day='Saturday' />
        </View>

      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff5f5',
    flex: 1,
  },
  shiftcard: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    shadowColor: 'red',
    shadowOffset: 1,
    shadowRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  leftSide: {
    backgroundColor: '#cf2b1f',
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  day: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})