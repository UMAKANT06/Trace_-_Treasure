import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import HomeScreen from '@/components/screens/HomeScreen';
import { Provider as PaperProvider } from 'react-native-paper';
// import myTheme from '@/constants/Colors';
// import { Text, View } from '@/components/Themed';
import {
  Text,
  Surface,
  Card,
  useTheme,
  ActivityIndicator,
} from "react-native-paper";
import BackSurface from '@/components/common/BackSurface';

export default function TabOneScreen() {
  const { colors } = useTheme();
  return (

      <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
