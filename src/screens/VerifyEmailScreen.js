import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function VerifyEmailScreen({ navigation }) {
    const [code, setCode] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify your email</Text>
            <Text style={styles.description}>Enter the 4‑digit code we sent you.</Text>
            <TextInput
                style={styles.input}
                value={code}
                onChangeText={setCode}
                placeholder="1234"
                keyboardType="number-pad"
                maxLength={4}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
    description: { color: colors.muted, marginBottom: 16 },
    input: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#eee', textAlign: 'center', letterSpacing: 8 },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14, marginTop: 12 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
});
