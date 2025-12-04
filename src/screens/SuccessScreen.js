import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function SuccessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.check}>✓</Text>
            </View>
            <Text style={styles.title}>Order placed!</Text>
            <Text style={styles.subtitle}>Your healthy meal is on the way.</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HomeTab')}
            >
                <Text style={styles.buttonText}>Back to home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center', padding: 24 },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: colors.success,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    check: { fontSize: 40, color: '#fff', fontWeight: '700' },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 6 },
    subtitle: { color: colors.muted, marginBottom: 24 },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
});
