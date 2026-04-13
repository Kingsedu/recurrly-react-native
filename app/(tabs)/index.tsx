import { Text, View } from "react-native";
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-sans-bold text-success">
        Welcome to React-native.
      </Text>
      <Link href="/onboarding" className="mt-4 rounded text-white px-10 py-3 inline-flex bg-black font-sans-bold">On Boarding Screen</Link>
      <Link
        href="/signUp"
        className="mt-4 inline-flex rounded bg-black px-10 py-3 text-white font-sans-bold"
      >
        Sign Up
      </Link>
      <Link
        href="/signIn"
        className="mt-4 inline-flex rounded bg-black px-10 py-3 text-white font-sans-bold"
      >
        Sign In
      </Link>

    </SafeAreaView>
  );
}
