import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { tabs } from '@/constants/data'
import { styles } from '@/constants/colors'
import clsx from 'clsx'
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context'
import { components, colors } from '@/constants/theme'

const tabBar = components.tabBar
export default function TabsRootLayout() {
    const insets = useSafeAreaInsets();
    console.log(`this is the Top Value ${insets.top} and this is the bottom value ${insets.bottom}`)
    console.log(`this is the horizontal value ${tabBar.horizontalInset} `)
    const TabIcon = ({focused, icon}: TabIconProps) => {
        return (
           <View className='size-12 items-center justify-center'>
            <View className={clsx("size-12 items-center justify-center rounded-full",
    focused ? "bg-accent" : "bg-transparent")} >
                <Image source={icon} resizeMode='contain' className='size-6'/>
            </View>
           </View>
        )
    }
  return (
    <>
     <Tabs 
     screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
            position: "absolute",
            bottom: Math.max(insets.bottom, tabBar.horizontalInset),
            height: tabBar.height,
            marginHorizontal: tabBar.horizontalInset,
            borderRadius: tabBar.radius,
            backgroundColor: colors.primary
        },
        tabBarItemStyle:{
            paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
       tabBarIconStyle:{
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: "center",
       }
    }}
     >
     {tabs.map((tab) => (
        <Tabs.Screen 
        name={tab.name} 
        key={tab.name} 
        options={{ 
            title: tab.title,
            tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} icon={tab.icons}/>
            )
        }}/>
     ))}
    </Tabs>
</>
  )
}
