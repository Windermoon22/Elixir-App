import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/Colors';

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = React.useState('');

    return (
        <SafeAreaView style={styles.screen}>
            {/* Top back arrow */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={22} color="#111" />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {/* Illustration */}
                <View style={styles.illustrationWrapper}>
            
                    <Image
                        source={require('../../assets/images/forgot-password.png')}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                {/* Title & description */}
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subtitle}>
                    Please enter your email address to receive a verification code.
                </Text>

                {/* Email input */}
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="john@example.com"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {/* Send code button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('VerifyEmail')}
                >
                    <Text style={styles.buttonText}>Send Code</Text>
                </TouchableOpacity>

                {/* Hint text */}
                <Text style={styles.footerText}>Try another way?</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFF5DA', // soft yellow like your Figma
    },
    headerRow: {
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    backButton: {
        width: 32,
        height: 32,
        borderRadius: 999,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    illustrationWrapper: {
        alignItems: 'center',
        marginBottom: 24,
    },
    illustration: {
        width: 220,
        height: 160,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        textAlign: 'left',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 24,
    },
    label: {
        fontSize: 13,
        color: '#4B5563',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 14,
        marginBottom: 18,
    },
    button: {
        backgroundColor: '#111827',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    footerText: {
        marginTop: 16,
        fontSize: 13,
        color: '#9CA3AF',
        textAlign: 'center',
    },
});
