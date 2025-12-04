import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function RestaurantScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Restaurant details coming soon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 18 },
});
