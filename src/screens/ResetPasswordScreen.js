import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


export default function ResetPasswordScreen({ navigation }) {
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');

    const canSave = password.length >= 6 && password === confirm;

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
                    {/* Replace with your own illustration if available */}
                    <Image
                        source={require('../../assets/images/create-new-password.png')}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                {/* Title & description */}
                <Text style={styles.title}>Create new password</Text>
                <Text style={styles.subtitle}>
                    Your new password must be different from previously used passwords.
                </Text>

                {/* New password */}
                <Text style={styles.label}>New Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Confirm password */}
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Re-enter new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    value={confirm}
                    onChangeText={setConfirm}
                />

                {/* Save button */}
                <TouchableOpacity
                    style={[styles.button, !canSave && { opacity: 0.6 }]}
                    disabled={!canSave}
                    onPress={() => navigation.replace('SignIn')}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
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
        marginBottom: 14,
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
});
