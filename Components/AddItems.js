import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'

function AddItems({ textInput, handleChangeText, handleOnPress }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={handleChangeText}
        placeholder={'Enter your new reminder'}
      />
      <TouchableOpacity
        onPress={handleOnPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 50,
      paddingVertical: 30,
    },
    input: {
      borderBottomColor: '#0F084B',
      borderBottomWidth: 1,
      flex: 1,
      marginRight: 50,
      color: '#0F084B'
    },
    buttonContainer: {
        backgroundColor: '#0F084B',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20
    },
    buttonText: {
        color: '#A6CFD5',
    }


    
})

export default AddItems