import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from '../theme/Colors';
import { useCart } from '../store/cartStore';

export default function PaymentScreen({ navigation }) {
    const subtotal = useCart(state => state.subtotal());
    const clearCart = useCart(state => state.clear);
    const [card, setCard] = React.useState('');
    const [name, setName] = React.useState('');

    const payNow = () => {
        if (!card || !name) {
            Alert.alert('Missing info', 'Please enter name and card number.');
            return;
        }
        clearCart();
        navigation.navigate('SuccessTab');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <Text style={styles.amount}>Total: LKR {subtotal.toFixed(2)}</Text>

            <TextInput
                style={styles.input}
                placeholder="Card holder name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Card number"
                value={card}
                onChangeText={setCard}
                keyboardType="number-pad"
            />

            <TouchableOpacity style={styles.button} onPress={payNow}>
                <Text style={styles.buttonText}>Pay now</Text>
            </TouchableOpacity>

            <Text style={styles.note}>
                This is a demo payment screen. No real money is charged.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
    title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
    amount: { fontSize: 18, fontWeight: '600', marginBottom: 16 },
    input: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#eee',
    },
    button: { backgroundColor: colors.primary, padding: 16, borderRadius: 14, marginTop: 8 },
    buttonText: { textAlign: 'center', fontWeight: '700' },
    note: { marginTop: 12, color: colors.muted, fontSize: 12 },
});
