// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import BackSurface from '../common/BackSurface';
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { Border, FontSize, Color, FontFamily, Padding } from '@/constants/Colors';

const HomeScreen: React.FC = () => {
    return (
        <BackSurface surfaceStyle={styles.container}>

            <View style={[styles.card, styles.cardLayout]}>
                <Text style={styles.textStyle2}>Welcome to the Home Screen!</Text>
            </View>
            <View style={styles.shortcut}>
                <LinearGradient
                    style={styles.shortcutSpaceBlock}
                    locations={[0, 0.91]}
                    colors={["#ff9557", "#fdd0b6"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        // source={require("../assets/illustrationsave-money.png")}
                        source={require('../../assets/illustrationsave-money.png')}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
                <LinearGradient
                    style={[styles.shortcut2, styles.shortcutSpaceBlock]}
                    locations={[0, 0.29, 1]}
                    colors={["#bdbcff", "#d2d1ff", "#e2e1ff"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        source={require("../../assets/illustrationsecurity.png")}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
                <LinearGradient
                    style={[styles.shortcut2, styles.shortcutSpaceBlock]}
                    locations={[0, 0.91]}
                    colors={["#fec6a5", "#ffe7d9"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        source={require("../../assets/illustrationsave-money1.png")}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
            </View>
            <View style={styles.shortcut4}>
                <LinearGradient
                    style={styles.shortcutSpaceBlock}
                    locations={[0, 0.91]}
                    colors={["#ff9557", "#fdd0b6"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        // source={require("../assets/illustrationsave-money.png")}
                        source={require('../../assets/illustrationsave-money.png')}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
                <LinearGradient
                    style={[styles.shortcut2, styles.shortcutSpaceBlock]}
                    locations={[0, 0.29, 1]}
                    colors={["#bdbcff", "#d2d1ff", "#e2e1ff"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        source={require("../../assets/illustrationsecurity.png")}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
                <LinearGradient
                    style={[styles.shortcut2, styles.shortcutSpaceBlock]}
                    locations={[0, 0.91]}
                    colors={["#fec6a5", "#ffe7d9"]}
                >
                    <Image
                        style={styles.illustrationsaveMoneyIcon}
                        contentFit="cover"
                        source={require("../../assets/illustrationsave-money1.png")}
                    />
                    <Text>Stock</Text>
                </LinearGradient>
            </View>
        </BackSurface>
    );
};

const styles = StyleSheet.create({
    cardLayout: {
        borderRadius: Border.br_5xl,
        overflow: "hidden",
    },
    illustrationsaveMoneyIcon: {
        width: 64,
        height: 64,
    },
    card: {
        backgroundColor: Color.primaryPrimary10,
        width: 340,
        height: 200,
        position: "absolute",
        overflow: "hidden",
        marginTop: 70,
        alignSelf: 'center'
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 20,
    },
    shortcut2: {
        marginLeft: 14,
    },
    shortcut: {
        top: 285,
        // left: 18,
        flexDirection: "row",
        position: "absolute",
    },
    shortcut4: {
        top: 415,
        // left: 18,
        flexDirection: "row",
        position: "absolute",
    },
    shortcutSpaceBlock: {
        // backgroundColor: Color.globalTokenGradientGradient2,
        paddingTop: Padding.p_base,
        height: 112,
        width: 104,
        paddingHorizontal: Padding.p_base,
        borderRadius: Border.br_xs,
        justifyContent: "space-between",
        paddingBottom: Padding.p_5xs,
        alignItems: "center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 16,
        color: '#101828',
        backgroundColor: '#0c0e19',
    },
    content: {
        flex: 1,
        width: '90%',
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        marginBottom: 16,
    },
    textStyle2: {
        color: Color.aliasTokenColorNeutralLightmodeTextPrimary,
        fontSize: 20,
        marginBottom: 16,
        textAlign: 'center',
        marginTop: 70
    },
});

export default HomeScreen;


