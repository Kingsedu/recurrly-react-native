import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { Link } from 'expo-router'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from '@/constants/colors'
import images from '@/constants/images'
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatMoney } from "@/lib/lib";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpComingSub from "@/components/UpComingSub";
import SubscriptionCard from "@/components/SubscriptionCard";
export default function Index() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null >(null)
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
          ListHeaderComponent={() => (
            <>
              <View className={styles.home.header}>
                <View className={styles.home.user}>
                    <Image source={images.avatar} className={styles.home.avatar}/>
                    <Text className={styles.home.userName}>{HOME_USER.name}</Text>
                </View>
                  <Image source={icons.add} className={styles.home.addIcon}/>
                </View>
                {/* --------------- */}
                <View style={cssStyles.container}>
                  <Text className={styles.home.balanceLabel}>Balance</Text>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-4xl font-sans-extrabold text-white">{formatMoney(HOME_BALANCE.amount)}</Text>
                    <Text className="text-xl font-sans-medium text-white">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
                  </View>
                </View>
                <View className="mb-5">
                    <ListHeading title="Upcoming"/>

                <FlatList
                    data={UPCOMING_SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <UpComingSub {...item}/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={<Text className="py-4 text-sm font-sans-medium text-black/60">No upcoming</Text>}
                  />
                </View>
                <ListHeading title="All Subscription" />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) =>item.id}
          renderItem={({ item }) => (
              <SubscriptionCard
                  {...item}
                  expanded={expandedSubscriptionId === item.id}
                  onPress={() => setExpandedSubscriptionId((currentId) => currentId === item.id ? null : item.id)}
                // expanded={expandedSubscriptionId === HOME_SUBSCRIPTIONS[0].id}

                // {...HOME_SUBSCRIPTIONS[0]}
      />
          )}
                ItemSeparatorComponent={() => <View className="h-4"/>}
                extraData={expandedSubscriptionId}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text className="py-4 text-sm font-sans-medium text-black/60">
                  No subscription yet
                </Text>}
                contentContainerClassName="pb-10"
          />

    </SafeAreaView>
  );
}


export const cssStyles = StyleSheet.create({
  container: {
    marginVertical: 10,        // my-2.5
    minHeight: 200,            // approximate for min-h-50
    justifyContent: "space-between",
    padding: 24,               // p-6
    backgroundColor: "#ea7a53", // bg-accent

    // directional radius
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  bottom: {

  }
});