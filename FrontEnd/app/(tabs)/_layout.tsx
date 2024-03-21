import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useTheme } from "react-native-paper";
// import myTheme from '@/constants/Colors';
import Home from "./index";
import TestScreen from '@/components/screens/TestScreen';
import Cammera from '@/components/screens/Camera';
import DashBoard from '@/components/screens/DashBoard';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Border, FontSize, Color, FontFamily, Padding } from '@/constants/Colors';

export default function TabLayout() {
    const Tab = createMaterialBottomTabNavigator();
    const { colors } = useTheme();

    return (

        <Tab.Navigator style={{backgroundColor:'red'}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: "home-variant-outline",
                }}
            />
            <Tab.Screen
                name="Cammera"
                component={Cammera}
                options={{
                    tabBarIcon: "camera",
                }}
            />
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={{ tabBarIcon: "view-dashboard-outline" }}
            />
            <Tab.Screen
                name="Test Screen"
                component={TestScreen}
                options={{ tabBarIcon: "bug" }}
            />
        </Tab.Navigator>


    );
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'red'
    }
})


