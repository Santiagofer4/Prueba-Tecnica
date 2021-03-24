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
import Number from './components/Number';



function StatisticsDate() {
    return (
        <View style={styles.baseContainer}>
            <DateFilter />
            <Number/>
            <Image source={graph} style={{ width: "100%" }} />
            <Months />
        </View>
    )
}

const styles = StyleSheet.create({
    baseContainer: {
        height: 355,
        width: 310,
        borderRadius: 16,
        backgroundColor: '#10161C',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 44,
        //'''''''shadow'''''''
        borderWidth: 1,
        borderLeftColor: "#1C232A",
        borderBottomColor: "#1C232A",
        borderTopColor: '#050d14',
        borderRightColor: '#050d14',
    },
});

export default StatisticsDate
