import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type ListProps = {
    title: string
}
export default function ListHeading({title}: ListProps) {
  return (
    <View className='mt-5 mb-3 flex-row items-center justify-between'>
      <Text className='text-2xl font-sans-bold text-primary'>{title}</Text>
      <TouchableOpacity className='rounded-full border border-black/20 px-4 py-1'>
        <Text className='text-lg font-sans-semibold text-primary'>View all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})