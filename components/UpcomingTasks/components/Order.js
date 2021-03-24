import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Progress from './Progress';

function Order({ orderTest }) {

    return (
        <View style={styles.orderView}>
            <Text style={styles.orderId}>{orderTest.orderId}</Text>
            <Text style={styles.orderName}>{orderTest.orderName}</Text>
            <Progress prop={orderTest.progress} />
            <Text style={styles.timeLeft}>{`${orderTest.dayLeft} day left`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    orderId: {
        marginTop: 12,
        marginLeft: 19,
        color: '#FFFFFF',
        fontFamily: "Avenir",
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
    orderView: {
        height: 106,
        width: 171,
        borderRadius: 8,
        backgroundColor: '#10161C',
        marginRight: 14,
        //'''''shadows'''''
        borderWidth: 2,
        borderLeftColor: "#1C232A",
        borderTopColor: "#1C232A",
        borderBottomColor: '#040B11',
        borderRightColor: '#040B11',
        // (test) don't work
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
});

export default Order
