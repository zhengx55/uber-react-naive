import { icons } from "@/constants";
import { googleOAuth } from "@/lib/auth";
import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React from "react";
import { Alert, Image, Text, View } from "react-native";
import CustomButton from "./button";

const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    const result = await googleOAuth(startOAuthFlow);
    if (result.code === "session_exists") {
      Alert.alert("Success", "Session exists. Redirecting to home screen.");
      router.replace("/(root)/(tabs)/home");
    }
    Alert.alert(result.success ? "Success" : "Error", result.message);
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-general-100 text-lg">Or continue with</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <View className="flex flex-row gap-x-3 items-center mt-4">
        <CustomButton
          title=""
          className="flex-1 rounded-lg h-14 shadow-none"
          IconLeft={() => (
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-5 h-5 mx-2"
            />
          )}
          bgVariant="outline"
          textVariant="primary"
          onPress={handleGoogleSignIn}
        />
        <CustomButton
          title=""
          className=" flex-1 rounded-lg h-14 shadow-none"
          IconLeft={() => (
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-5 h-5 mx-2"
            />
          )}
          bgVariant="outline"
          textVariant="primary"
          onPress={handleGoogleSignIn}
        />
        <CustomButton
          title=""
          className="flex-1 rounded-lg h-14 shadow-none"
          IconLeft={() => (
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-5 h-5 mx-2"
            />
          )}
          bgVariant="outline"
          textVariant="primary"
          onPress={handleGoogleSignIn}
        />
      </View>
    </View>
  );
};

export default OAuth;
