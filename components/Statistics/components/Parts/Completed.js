import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import check from '../Imgs/check.png'


function Completed() {
    return (
        <View style={styles.statisticsParts}>
        <Image style={styles.img} source={check} />
        <View style={styles.descriptionView}>
            <Text style={styles.number}>15</Text>
            <Text style={styles.status}>Completed</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
    descriptionView: {
        alignSelf: 'center'
    },
    number: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        height: 19,
        width: 92,
        color: '#C1C7D0',
        fontFamily: 'Avenir',
        fontSize: 14,
    },
    statisticsParts: {
        width: '50%',
        height: '50%',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#1C232A',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default Completed
