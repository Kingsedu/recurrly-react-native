import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
export default function SignUp() {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/signIn">Sign-In</Link>
    </View>
  )
}

const styles = StyleSheet.create({})