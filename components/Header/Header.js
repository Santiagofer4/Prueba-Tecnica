import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import campana from './campana.png';
import arrow from './arrow.png';

function Header() {
    return (
        <View style={styles.tasksContainer}>
        <Image style={styles.back} source={arrow}/>
          <Text style={styles.tasks}>Tasks</Text>
          <Image  style={styles.bell} source={campana}/>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksContainer: { 
      flexDirection: 'row',
      marginTop: 76,
      justifyContent: 'space-between',
      alignItems:'center',
    },
    back: { 
      width:20,height:20,marginLeft:31,
    },
    bell: { 
      marginRight:31,
    },
    tasks: {
      height: 25,
      width: 51,
      color: '#FFFFFF',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Header
