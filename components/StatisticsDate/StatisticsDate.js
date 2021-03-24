import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import DateFilter from './components/DateFilter';
import graph from './components/graph.png'
import Months from './components/Months';



function StatisticsDate() {
    return (
        <View style={styles.baseContainer}>
            <DateFilter />
            <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', }}>
                <Text style={styles.sign}>$</Text>
                <Text style={styles.number}>13,543</Text>
            </View>
            <Image source={graph} style={{ width: "100%" }} />
            <Months/>
        </View>
    )
}

const styles = StyleSheet.create({
    month: {
        color: '#89898A',
        fontFamily: "Avenir",
        fontSize: 16,
        fontWeight: 'bold',
    },
    number: {
        color: '#FFFFFF',
        fontFamily: "Avenir",
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 41,
        marginBottom: 20,
    },
    sign: {
        color: '#FFFFFF',
        fontFamily: ".SF NS Display",
        fontSize: 22,
        marginTop: 45,
        marginRight: 7
    },
    baseContainer: {
        height: 355,
        width: 310,
        borderWidth: 1,
        borderColor: '#10161C',
        borderRadius: 16,
        backgroundColor: '#10161C',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 44,
    },
});

export default StatisticsDate
