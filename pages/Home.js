import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import Card from '../components/Card';

export default function Home({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>Emergency and Relief Corps</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View>
            <Text style={styles.nickname}>Volt T355</Text>
            <Text style={styles.parainfo}>paramedic</Text>
            <Text style={styles.parainfo}>71 733 096</Text>
            <Text style={styles.parainfo}>points: #</Text>
          </View>

          <View style={styles.paraimage}>
            <Text style={{color:'white'}}>Profile</Text>
          </View>

        </View>

      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={styles.bodycolumn}>
              <Card 
              title='Material CheckUp'
              desc="Please be Careful while doing the chechUp"
              image={require('../assets/materials.jpg')}
              fct={()=>navigation.navigate('MatVeh')}
              ></Card>
              <Card
              title='Leader Ship'
              desc="LeaderShip System show members with highst points"
              image={require('../assets/podium.jpg')}
              fct={()=>navigation.navigate('LeaderShip')}
              ></Card>
              <Card 
              title='All Shifts'
              desc="See the members of all night shifts"
              fct={()=>navigation.navigate('AllShifts')}
              >
              </Card>
            </View>
            <View style={styles.bodycolumn}>
              <Card
              title='Mechanical CheckUp'
              desc="Please be Careful while doing the chechUp"
              image={require('../assets/mech.png')}
              fct={()=>navigation.navigate('Mechanical')}>
                
              </Card>
              <Card
              title='Shift Boss'
              desc="Here the boss can do all his missions"
              image={require('../assets/badge.png')}
              fct={()=>navigation.navigate('Boss')}>
              </Card>
              <Card></Card>
            </View>
          </View>


        </ScrollView>




      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#cf2b1f',
  },
  header: {
    flex: 0.28,
    backgroundColor: '#cf2b1f',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  body: {
    flex: 0.72,
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: '#fff5f5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    padding: 10
  },
  bodycolumn: {
    paddingHorizontal: 20
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  nickname: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 10
  },
  paraimage: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 75,
    justifyContent:'center',
    alignItems:'center'
  },
  parainfo: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold'
  }
})