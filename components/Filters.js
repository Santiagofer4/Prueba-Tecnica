import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


function Filters() {

    return (
        <View style={styles.filterContainer}>
            <Text style={styles.all}>All</Text>
            <Text style={styles.filter}>In Progress</Text>
            <Text style={styles.filter}>Started</Text>
            <Text style={[styles.filter,{marginRight: 33}]}>Completed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    all: {
        color: '#FFBE00',
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: 'bold',
        width: 28,
        marginLeft: 33,
        borderBottomWidth: 2,
        borderColor: '#FFBE00',
        borderRadius: 0,
        paddingLeft: 2,
    },
    filter: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Filters
