import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const app = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    
  })
  return (
    <View>
      <Text
        style={styles.container}
      >App</Text>
    </View>
  )
}

export default app