import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

function Months() {
    return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={styles.month}>Jun</Text>
        <Text style={styles.month}>Jul</Text>
        <Text style={styles.month}>Aug</Text>
        <Text style={styles.month}>Sep</Text>
        <Text style={styles.monthSelect}>Oct</Text>
        <Text style={styles.month}>Nov</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    monthSelect: {
        color: '#FFFFFF',
        fontFamily: ".SF NS Display Regular",
        fontSize: 16,
        fontWeight: 'bold',
    },
    month: {
        color: '#89898A',
        fontFamily: "Avenir Heavy",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Months
