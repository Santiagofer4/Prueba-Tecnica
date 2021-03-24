import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

function Number() {
    return (
        <View style={styles.numberView}>
        <Text style={styles.sign}>$</Text>
        <Text style={styles.number}>13,543</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    numberView: {
        flexDirection: 'row', 
        marginLeft: 'auto', 
        marginRight: 'auto',
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
        borderRadius: 16,
        backgroundColor: '#10161C',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 44,
    },
});

export default Number
