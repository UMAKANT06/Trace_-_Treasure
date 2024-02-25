import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalScreen from "@/app/modal";

interface BackSurfaceProps {
    surfaceStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

const BackSurface = (props: BackSurfaceProps) => {
    const { colors } = useTheme();
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: colors.background },
                props.surfaceStyle,
            ]}
        >
            <SafeAreaView style={[styles.mainContainer, props.containerStyle]}>
                {props.children}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    mainContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
});

export default BackSurface;
