import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Completed from './Parts/Completed';
import Delayed from './Parts/Delayed';
import InProgress from './Parts/InProgress';
import Total from './Parts/Total';


function StatisticsParts() {
    return (
        <View style={styles.statisticsView}>
            <Total/>
            <InProgress/>
            <Completed/>
            <Delayed/>
        </View>
    )
}

const styles = StyleSheet.create({
    statisticsParts: {
        width: '50%',
        height: '50%',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#1C232A',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    statisticsView: {
        marginLeft: 29,
        marginRight: 26,
        marginTop: 15,
        marginBottom: 40,
        height: 138,
        flexWrap: 'wrap',
        borderRadius: 6,
        backgroundColor: '#10161C',
        //"shadows"
        borderWidth: 2,
        borderLeftColor: "#1C232A",
        borderTopColor: "#1C232A",
        borderBottomColor: '#040B11',
        borderRightColor: '#040B11',
        // shadow outside
        elevation: 15,
    },
});

export default StatisticsParts
