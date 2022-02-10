import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textHeader}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: '#0D0221',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textHeader: {
        color: '#A6CFD5',
        fontSize: 18
    }
})
export default Header