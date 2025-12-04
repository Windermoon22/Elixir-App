import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Expo Vector Icons

export default function QuantitySelector({ quantity, setQuantity }) {
    const onDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const onIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onDecrease}>
                <Ionicons name="remove-circle-outline" size={30} color="#4a4a4a" />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity style={styles.button} onPress={onIncrease}>
                <Ionicons name="add-circle-outline" size={30} color="#4a4a4a" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '600',
        width: 40,
        textAlign: 'center',
    },
});
