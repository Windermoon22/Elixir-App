import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function SignUpScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput style={styles.input} placeholder="Full name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry value={confirm} onChangeText={setConfirm} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Main')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
                    Sign In
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
    title: { fontSize: 26, fontWeight: '700', marginBottom: 16 },
    input: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14, marginTop: 12 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
    link: { color: colors.primaryDark, fontWeight: '600' },
    row: { flexDirection: 'row', marginTop: 16 },
});
