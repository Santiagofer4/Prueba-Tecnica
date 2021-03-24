import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function DateFilter() {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.filter}>Day</Text>
            <Text style={styles.filter}>Week</Text>
            <View>
                <Text style={styles.all}>Month</Text>
                <View style={styles.line}></View>
            </View>
            <Text style={styles.filter}>Year</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    all: {
        color: '#FFBE00',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
    },
    filter: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
    },
    line: {
        backgroundColor: '#FFBE00',
        width: 28,
        height: 3,
        borderRadius: 10
    },

});

export default DateFilter
