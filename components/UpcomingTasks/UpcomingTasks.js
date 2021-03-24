import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Progress from './components/Progress';
import UpcomTaskHeader from './components/UpcomTaskHeader';


function UpcomingTasks() {
    return (
        <View>
            <UpcomTaskHeader />
            <View style={styles.tasksViews}>
                <View style={styles.orderView}>
                    <Text style={styles.orderId}>Order #890PO90</Text>
                    <Text style={styles.orderName}>Bryan Williams</Text>
                    <Progress/>
                    <Text style={styles.timeLeft}>1 day left</Text>
                </View>
                <View style={styles.orderView}>
                    <Text style={styles.orderId}>Order #890PO90</Text>
                    <Text style={styles.orderName}>Marcus Klaus</Text>
                    <Progress/>
                    <Text style={styles.timeLeft}>1 day left</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderId: {
        marginTop: 12,
        marginLeft: 19,
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: 'bold',
    },
    orderName: {
        marginLeft: 19,
        color: '#C1C7D0',
        fontFamily: 'Avenir',
        fontSize: 12,
    },
    timeLeft: {
        color: '#C1C7D0',
        fontFamily: 'Avenir',
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 14,
        marginRight: 14,
        marginTop: 2,
        alignSelf: 'flex-end'
    },
    tasksViews: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 9,
    },
    orderView: {
        height: 106,
        width: 171,
        borderRadius: 8,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderLeftColor: "#1C232A",
        borderTopColor: "#1C232A",
        borderBottomColor: '#040B11',
        borderRightColor: '#040B11',
        backgroundColor: '#10161C',     
        marginRight: 14,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },
});

export default UpcomingTasks
