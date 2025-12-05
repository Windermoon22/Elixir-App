import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/Colors';

export default function VerifyEmailScreen({ navigation }) {
    const [code, setCode] = React.useState('');

    // Split code into 4 characters just for nice display
    const digits = [
        code[0] || '',
        code[1] || '',
        code[2] || '',
        code[3] || '',
    ];

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
                    {/* Replace with your verification illustration if you have one */}
                    <Image
                        source={require('../../assets/images/welcome-elixir.png')}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                {/* Title & description */}
                <Text style={styles.title}>Verify your email</Text>
                <Text style={styles.subtitle}>
                    Please enter the 4–digit code sent to your email address.
                </Text>

                {/* Code boxes */}
                <View style={styles.codeRow}>
                    {digits.map((d, index) => (
                        <View key={index} style={styles.codeBox}>
                            <Text style={styles.codeText}>{d}</Text>
                        </View>
                    ))}
                </View>

                {/* Hidden input to actually capture the code */}
                <TextInput
                    style={styles.hiddenInput}
                    value={code}
                    onChangeText={(text) => {
                        // allow only digits, max 4
                        const cleaned = text.replace(/[^0-9]/g, '').slice(0, 4);
                        setCode(cleaned);
                    }}
                    keyboardType="number-pad"
                    maxLength={4}
                    autoFocus
                />

                {/* Verify button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ResetPassword')}
                    disabled={code.length < 4}
                >
                    <Text style={styles.buttonText}>Verify Code</Text>
                </TouchableOpacity>

                {/* Resend text */}
                <Text style={styles.footerText}>
                    Didn’t receive the code? <Text style={styles.footerHighlight}>Resend</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFF5DA',
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
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 24,
    },
    codeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    codeBox: {
        width: 56,
        height: 56,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    codeText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0,
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
    footerHighlight: {
        color: '#10B981',
        fontWeight: '600',
    },
});

