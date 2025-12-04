import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../theme/Colors';

// --- Define Image Sources Here ---
// Make sure these paths are correct relative to THIS file's location.
// src/screens/OnboardingScreen.js

const welcomeImage = require('../../assets/images/welcome-elixir.png');
const qualityImage = require('../../assets/images/quality-meal.png');
const deliveryImage = require('../../assets/images/delivered-fast.png');


const slides = [
    // Use the imported variables directly as the 'source' prop value:
    { title: 'Quality Meals', imageSource: welcomeImage, subtitle: 'Balanced and delicious.' },
    { title: 'Fresh Ingredients', imageSource: qualityImage, subtitle: 'Cooked to order.' },
    { title: 'Delivered Fast', imageSource: deliveryImage, subtitle: 'Right to your door.' },
];
// ---------------------------------

export default function OnboardingScreen({ navigation }) {
    const [index, setIndex] = useState(0);
    const slide = slides[index];

    const goNext = () => {
        if (index < slides.length - 1) setIndex(index + 1);
        navigation.replace('Home');
;
    };

    return (
        <View style={styles.container}>
            {/* Change 'slide.image' to 'slide.imageSource' */}
            <Image source={slide.imageSource} style={styles.hero} />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.subtitle}>{slide.subtitle}</Text>

            <View style={styles.dots}>
                {slides.map((_, i) => (
                    <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={goNext}>
                <Text style={styles.buttonText}>{index < slides.length - 1 ? 'Continue' : 'Get started'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Auth')}>
                <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 40, backgroundColor: colors.bg },
    // You must also define a width and height for local images in React Native:
    hero: { position: 'absolute', top: 80, width: width - 64, height: width - 64, borderRadius: 20 },
    title: { fontSize: 28, fontWeight: '700', color: colors.text, marginTop: width - 64 + 40 },
    subtitle: { color: colors.muted, marginTop: 6 },
    dots: { flexDirection: 'row', marginTop: 12 },
    dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E8D8B1', marginHorizontal: 4 },
    dotActive: { backgroundColor: colors.primaryDark },
    button: { backgroundColor: colors.primary, paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12, marginTop: 24 },
    buttonText: { color: '#000', fontWeight: '700' },
    skip: { marginTop: 10, color: colors.muted },
});

