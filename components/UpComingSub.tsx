import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { formatMoney } from '@/lib/lib';
type DataProps ={
            id:  string;
            icon: any,
            name: string;
            price: number
            currency: string;
            daysLeft: number
}
export default function UpComingSub({id, icon, name, price, currency, daysLeft}: DataProps) {
  return (
    <View className='mr-4 w-44 rounded-2xl border border-black/10 bg-background p-4'>
        <View className='flex-row items-center gap-3'>
            <Image source={icon} className='size-14'/>
            <View>
                <Text className='text-lg font-sans-bold text-primary'>
                    {formatMoney(price, currency)}
                </Text>
                <Text className='text-sm font-sans-semibold text-muted-foreground' numberOfLines={1}>
                    {daysLeft > 1 ? `${daysLeft} days left`: `last day`}
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})