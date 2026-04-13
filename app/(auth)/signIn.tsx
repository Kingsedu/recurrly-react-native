import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
export default function SignIn() {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/signUp">Create Account</Link>
    </View>
  )
}

const styles = StyleSheet.create({})