/** @format */

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import {
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
  Entypo,
} from "@expo/vector-icons";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name='home' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='services'
        options={{
          title: "Services",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name='nav-icon-grid' size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name='text-document-inverted' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
