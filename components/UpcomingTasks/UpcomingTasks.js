import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import Order from './components/Order';
import UpcomTaskHeader from './components/UpcomTaskHeader';

const orders = [
    {    dayLeft: 1,
        progress: 20,
        orderId: 'Order #890PO90',
        orderName: 'Bryan Williams',
    },
    {   dayLeft: 1,
        progress: 20,
        orderId: 'Order #890PO90',
        orderName: 'Marcus Klaus',
    }
]

function UpcomingTasks() {
    return (
        <View>
            <UpcomTaskHeader />
            <ScrollView  horizontal={true} style={styles.tasksViews}>
            {orders.map((order) => <Order key={order.orderName} orderTest={order}/> )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksViews: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 9,
    },
});

export default UpcomingTasks
