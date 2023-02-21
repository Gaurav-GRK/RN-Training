import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider } from './Context'
import StackNav from './StackNav'

const Routes = () => {
  return (
    <AuthProvider>
        <StackNav/>
    </AuthProvider>
  )
}

export default Routes

const styles = StyleSheet.create({})