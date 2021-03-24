import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView ,
} from 'react-native';
import Header from './components/Header/Header.js'
import Filters from './components/Filters.js'
import UpcomingTasks from './components/UpcomingTasks/UpcomingTasks.js';
import Statistics from './components/Statistics/Statistics.js';
import StatisticsDate from './components/StatisticsDate/StatisticsDate.js';
import indicator from './components/indicator.png'


function App() {
  return (
      <ScrollView style={styles.baseContainer}>
        <Header/>
        <Text style={styles.create}>CREATE +</Text>
        <Filters/>
        <UpcomingTasks/>
        <Statistics/>
        <StatisticsDate/>
        <Image source={indicator} style={styles.indicatorImg} />
      </ScrollView >
  )
}


const styles = StyleSheet.create({
  baseContainer: { 
    backgroundColor: '#040B11',
  },
  create: {
    marginRight: 33,
    marginTop: 41,
    height: 24,
    color: '#FFBE00',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'right',
  },
  indicatorImg: { 
    marginBottom: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default App;
