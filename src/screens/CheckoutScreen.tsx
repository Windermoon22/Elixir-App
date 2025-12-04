import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type Dish = { id: string; name: string; description: string; price: number; image: any };
type Props = { route: { params?: { cart?: Dish[] } }; navigation: any };

export default function CheckoutScreen({ route, navigation }: Props) {
    const cart: Dish[] = route.params?.cart || [];
    const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = 2.99;
    const totalWithFee = getTotal() + deliveryFee;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#111" />
                </TouchableOpacity>
                <Text style={styles.title}>Your Order</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>Order Summary</Text>
                    <Text style={styles.summarySubtitle}>{cart.length} items</Text>
                </View>

                {cart.map((item) => (
                    <View key={item.id} style={styles.itemCard}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDesc}>{item.description}</Text>
                        </View>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    </View>
                ))}

                <View style={styles.priceCard}>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Subtotal</Text>
                        <Text style={styles.priceValue}>${getTotal().toFixed(2)}</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Delivery</Text>
                        <Text style={styles.priceValue}>${deliveryFee.toFixed(2)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>${totalWithFee.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Place Order • ${totalWithFee.toFixed(2)}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF5DA' },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#fff' },
    backButton: { padding: 8 },
    title: { fontSize: 20, fontWeight: '700', color: '#111', flex: 1, marginLeft: 8 },
    scrollContent: { padding: 16, paddingBottom: 120 },
    summaryCard: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 16 },
    summaryTitle: { fontSize: 20, fontWeight: '700' },
    summarySubtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },
    itemCard: { backgroundColor: '#fff', flexDirection: 'row', padding: 16, borderRadius: 16, marginBottom: 12 },
    itemImage: { width: 80, height: 80, borderRadius: 12 },
    itemInfo: { flex: 1, marginLeft: 12 },
    itemName: { fontSize: 16, fontWeight: '600' },
    itemDesc: { fontSize: 14, color: '#6B7280', marginTop: 2 },
    price: { fontSize: 16, fontWeight: '700', alignSelf: 'center' },
    priceCard: { backgroundColor: '#fff', padding: 20, borderRadius: 16 },
    priceRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
    priceLabel: { fontSize: 16, color: '#6B7280' },
    priceValue: { fontSize: 16, fontWeight: '600' },
    totalRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#E5E7EB', marginTop: 8 },
    totalLabel: { fontSize: 18, fontWeight: '700' },
    totalValue: { fontSize: 20, fontWeight: '800' },
    orderButton: {
        position: 'absolute', bottom: 24, left: 16, right: 16,
        backgroundColor: '#111827', borderRadius: 16, paddingVertical: 18, alignItems: 'center',
    },
    orderButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});

