import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Progress() {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.progress}>Progress</Text>
                <Text style={styles.progress}>20%</Text>
            </View>
            <View style={styles.progressBarTotal}>
                <View style={styles.progressBar}></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    progress: {
        color: '#C1C7D0',
        fontFamily: 'Avenir',
        fontSize: 12,
        letterSpacing: 0,
        lineHeight: 16,
        marginLeft: 19,
        marginRight: 14,
        marginTop: 10,
    },
    progressBarTotal: {
        backgroundColor: '#494C50',
        height: 4,
        marginRight: 13,
        marginLeft: 20,
        marginTop: 3,
        borderRadius: 3,
    },
    progressBar: {
        backgroundColor: '#ffcc00',
        height: 4,
        width: 40,
        borderRadius: 3,
    },
});

export default Progress
