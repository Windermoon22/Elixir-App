import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>Enter your email to receive a code.</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyEmail')}>
                <Text style={styles.buttonText}>Send Code</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
    description: { color: colors.muted, marginBottom: 16 },
    input: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14, marginTop: 12 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
});
