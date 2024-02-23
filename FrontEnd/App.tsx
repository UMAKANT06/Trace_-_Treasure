import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StyleProp } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, useTheme,Button } from 'react-native-paper';
import myTheme from './components/colors';
export default function App() {
  const { colors } = useTheme();

  return (
      <View style={{backgroundColor: colors.background}}>
        <Text >Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
