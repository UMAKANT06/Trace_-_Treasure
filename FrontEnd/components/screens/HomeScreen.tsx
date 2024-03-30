import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import BackSurface from '../common/BackSurface';
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { Border, FontSize, Color, FontFamily, Padding } from '@/constants/Colors';
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';



const HomeScreen: React.FC = () => {
    return (
        <BackSurface surfaceStyle={styles.container}>
            <ScrollView>
                <View>
                    <LinearGradient
                     style={styles.topCard}
                     locations={[0, 0.79]}
                     colors={["#050414","#212d43"]}
                    >
                        <Card style={styles.searchCard}>
                            <Card.Content>
                            <Text style={{color:'white'}}>Search</Text>
                            </Card.Content>
                        </Card>
                        

                    </LinearGradient>
                </View>
                <View >
                <LinearGradient
                        style={[styles.card, styles.cardLayout]}
                        locations={[0, 0.39, 1.3]}
                        colors={["#bdbcff", "#d2d1ff", "#e2e1ff"]}
                    >
                
    
                    </LinearGradient>
                  
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
                        <Text>Lost and Found</Text>
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
                        <Text>PYQ's</Text>
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
                        <Text>Acadmeic Calendar</Text>
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
                        <Text>Criculum and Syullabus</Text>
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
                        <Text>Books</Text>
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
                        <Text>Shopping</Text>
                    </LinearGradient>
                </View>


                <View style={[styles.step, styles.stepFlexBox]}>
                    <View style={styles.content2}>
                        <View style={styles.step1}>
                            <View style={styles.logo}>
                                <Image
                                    style={styles.iconboldticketStar}
                                    contentFit="cover"
                                    source={require("../../assets/iconboldticket-star.png")}
                                />
                            </View>
                            <View style={styles.text1}>
                                <Text style={[styles.step11, styles.stotTypo]}>Step 1</Text>
                                <Text
                                    style={[styles.enterIntroduceCouper, styles.text3Typo]}
                                >{`Open the Cammera `}</Text>
                            </View>
                        </View>
                        <View style={styles.step2}>
                            <View style={styles.logo}>
                                <Image
                                    style={styles.octicongift24}
                                    contentFit="cover"
                                    source={require("../../assets/iconboldfund.png")}
                                />
                            </View>
                            <View style={styles.text1}>
                                <Text style={[styles.step11, styles.stotTypo]}>Step 2</Text>
                                <Text style={[styles.enterIntroduceCouper, styles.text3Typo]}>
                                    Upload materilas to help others
                                </Text>
                            </View>
                        </View>
                        <Image
                            style={[styles.contentChild, styles.rewardPosition]}
                            contentFit="cover"
                            source={require("../../assets/vector-221.png")}
                        />
                    </View>
                    <Image
                        style={styles.illustrationcoinIcon}
                        contentFit="cover"
                        source={require("../../assets/illustrationcoin.png")}
                    />
                </View>
            </ScrollView>
        </BackSurface>
    );
};
const styles = StyleSheet.create({
    searchCard:{
        backgroundColor:'#0c0e19',
        width:300,
        alignSelf:'center',
        marginTop:32

    },
    topCard:{
        paddingTop: Padding.p_base,
        height: 112,
        width: 354,
        paddingHorizontal: Padding.p_base,
        borderRadius: 30,
        justifyContent: "space-between",
        paddingBottom: Padding.p_5xs,
        alignItems: "center",
        marginTop:-15,
        alignSelf:'center'

    },
    rewardPosition: {
        left: 16,
        position: "absolute",
    },
    octicongift24: {
        height: 24,
        width: 24,
        overflow: "hidden",
    },
    stepFlexBox: {
        marginTop: 480,
        backgroundColor: '#202b41',
        borderRadius: Border.br_base,
        alignItems: "center",
        flexDirection: "row",
        alignSelf:'center'
    },
    text3Typo: {
        // color: Color.aliasTokenColorNeutralLightmodeTextSecondary,
        color: 'white',
        textAlign: "left",
        fontFamily: FontFamily.bodyB2Regular,
        lineHeight: 16,
        fontSize: FontSize.captionC1Regular_size,
    },
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
        width: 350,
        height: 200,
        position: "absolute",
        overflow: "hidden",
        marginTop: 17,
        alignSelf: 'center',
        
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
        top: 324,
        // left: 18,
        flexDirection: "row",
        position: "absolute",
        alignSelf:'center'
    },
    stotTypo: {
        lineHeight: 25,
        textAlign: "left",
        letterSpacing: 0,
        fontSize: FontSize.labelL1Medium_size,
    },
    iconboldticketStar: {
        height: 24,
        width: 24,
    },
    logo: {
        borderRadius: Border.br_6xl,
        backgroundColor: Color.aliasTokenColorPrimaryLightActive,
        padding: Padding.p_9xs,
        flexDirection: "row",
    },
    step11: {
        fontFamily: FontFamily.labelL1Semibold,
        alignSelf: "stretch",
        fontWeight: "600",
        color: 'white',
    },
    enterIntroduceCouper: {
        alignSelf: "stretch",
    },
    text1: {
        marginLeft: 12,
        flex: 1,
    },
    step1: {
        alignSelf: "stretch",
        zIndex: 0,
        alignItems: "center",
        flexDirection: "row",
    },
    step2: {
        marginTop: 16,
        alignSelf: "stretch",
        zIndex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    contentChild: {
        top: 38,
        maxWidth: "100%",
        height: 24,
        zIndex: 2,
        overflow: "hidden",
        color: 'white',
        backgroundColor:'white',
    },
    content: {
        flex: 1,
    },
    illustrationcoinIcon: {
        height: 100,
        width: 100,
        marginLeft: 12,
    },
    step: {
        padding: Padding.p_base,
        width: 343,
    },
    shortcut4: {
        top: 450,
        // left: 18,
        flexDirection: "row",
        position: "absolute",
        alignSelf:'center'
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
        // marginTop: -2,
        color: '#101828',
        backgroundColor: '#0c0e19',
    },
    content2: {
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


