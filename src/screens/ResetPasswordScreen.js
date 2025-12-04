import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function ResetPasswordScreen({ navigation }) {
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create new password</Text>
            <TextInput
                style={styles.input}
                placeholder="New password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                secureTextEntry
                value={confirm}
                onChangeText={setConfirm}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignIn')}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
    input: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14, marginTop: 12 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
});
