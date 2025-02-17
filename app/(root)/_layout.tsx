import { useGlobalContext } from "@/lib/global-provider";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
