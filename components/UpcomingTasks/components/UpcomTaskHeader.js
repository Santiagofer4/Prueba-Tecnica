import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function UpcomTaskHeader() {
    return (
        <View style={{ flexDirection: 'row' }}>
        <Text style={styles.upcoming}>Upcoming Tasks</Text>
        <Text style={styles.number}>5</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    upcoming: {
        marginTop: 30,
        width: 110,
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 26,
        marginLeft: 33,
    },
    number: {
        marginTop: 30,
        color: '#C1C7D0',
        fontFamily: 'Avenir',
        fontSize: 14,
        lineHeight: 26,
        marginLeft: 8,
    },
});

export default UpcomTaskHeader
