import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <ActivityIndicator
        style={styles.loadingStyle}
        color={'#1a7aff'}
    />
    )
}

export default Loading;

const styles = StyleSheet.create({
    loadingStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        left: 0
    }
})
