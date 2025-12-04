import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function QuantitySelector({ value, onChange }) {
    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={() => onChange(Math.max(1, value - 1))}>
                <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity onPress={() => onChange(value + 1)}>
                <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
    btn: { fontSize: 22, paddingHorizontal: 14, paddingVertical: 4, backgroundColor: colors.card, borderRadius: 10 },
    value: { marginHorizontal: 10, fontSize: 18, fontWeight: '600' },
});
