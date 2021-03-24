import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import DownloadButton from './components/DownloadButton';
import StatisticsParts from './components/StatisticsParts';


function Statistics() {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Statistics</Text>
                <DownloadButton />
            </View>
            <StatisticsParts/>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26,
        marginLeft: 30,
        marginTop: 30,
    },
});

export default Statistics
