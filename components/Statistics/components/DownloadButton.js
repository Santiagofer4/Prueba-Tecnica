import React from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import download from './Imgs/download.png'
import arrowD from './Imgs/arrowD.png'

function DownloadButton() {
    return (
        <View style={styles.downloadView}>
        <View style={{ height:'100%',width: 37, borderRightColor: '#494C50', borderRightWidth: 1 }}>
            <Image style={styles.downloadImage} source={download}/>
        </View>
        <Image style={styles.downloadImage2} source={arrowD}/>
    </View>
    )
}

const styles = StyleSheet.create({
    downloadImage2: {
        width: 8, 
        height: 8, 
        alignSelf: 'flex-end',   
        marginTop: 'auto',
        marginBottom:6,
        marginRight: 3,
    },
    downloadImage: {
        width: 15, 
        height: 15, 
        alignSelf: 'center',   
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    downloadView: {
        height: 24,
        width: 53,
        borderWidth: 1,
        borderColor: '#1C232A', 
        borderRadius: 4,
        backgroundColor: '#10161C',
        marginRight:29,
        marginTop: 30,
    },
});

export default DownloadButton
