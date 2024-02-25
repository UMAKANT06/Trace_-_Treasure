// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BackSurface from '../common/BackSurface';
import Carousel from 'react-native-snap-carousel';

const images = [{ id: 1, url: './asse' },
{ id: 1, url: './asse' }
]

const HomeScreen: React.FC = () => {
    return (
        <BackSurface surfaceStyle={styles.container}>
            <View>
                <Text>Welcome to the Home Screen!</Text>
            </View>
        </BackSurface>
    );
};

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

export default HomeScreen;
