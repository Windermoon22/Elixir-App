import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type Dish = { id: string; name: string; description: string; price: number; image: any };
type Props = { route: { params: { restaurant: any } }; navigation: any };

const SOUPS: Dish[] = [
    { id: '1', name: 'Pumpkin Soup', description: 'Warm creamy pumpkin with fresh herbs', price: 7.99, image: require('../../assets/images/mini-soup.png') },
    { id: '2', name: 'Tomato Soup', description: 'Bright tangy tomato soup for any day', price: 6.99, image: require('../../assets/images/mini-soup.png') },
    { id: '3', name: 'Chicken Soup', description: 'Classic chicken noodle with veggies', price: 8.49, image: require('../../assets/images/mini-soup.png') },
    { id: '4', name: 'Mushroom Soup', description: 'Rich earthy mushroom soup', price: 7.49, image: require('../../assets/images/mini-soup.png') },
];

export default function RestaurantScreen({ route, navigation }: Props) {
    const { restaurant } = route.params;
    const [cart, setCart] = useState<Dish[]>([]);

    const addToCart = (dish: Dish) => setCart([...cart, dish]);
    const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#111" />
                </TouchableOpacity>
                <Text style={styles.title}>{restaurant.name}</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <FlatList
                    data={SOUPS}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                    renderItem={({ item: dish }) => (
                        <View style={styles.dishCard}>
                            <Image source={dish.image} style={styles.dishImage} />
                            <View style={styles.dishInfo}>
                                <Text style={styles.dishName}>{dish.name}</Text>
                                <Text style={styles.dishDescription}>{dish.description}</Text>
                                <View style={styles.dishFooter}>
                                    <Text style={styles.dishPrice}>${dish.price}</Text>
                                    <TouchableOpacity style={styles.addButton} onPress={() => addToCart(dish)}>
                                        <Text style={styles.addButtonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>

            {cart.length > 0 && (
                <TouchableOpacity style={styles.cartFooter} onPress={() => navigation.navigate('Checkout', { cart })}>
                    <View style={styles.cartSummary}>
                        <Text style={styles.cartItems}>{cart.length} items</Text>
                        <Text style={styles.cartTotal}>${getTotal().toFixed(2)}</Text>
                    </View>
                    <Text style={styles.cartButtonText}>View Cart</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF5DA' },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#fff' },
    backButton: { padding: 8 },
    title: { flex: 1, fontSize: 18, fontWeight: '700', marginLeft: 8 },
    scrollContent: { flexGrow: 1 },
    dishCard: { flexDirection: 'row', backgroundColor: '#fff', marginHorizontal: 16, marginBottom: 12, borderRadius: 12, overflow: 'hidden' },
    dishImage: { width: 100, height: 100 },
    dishInfo: { flex: 1, padding: 16 },
    dishName: { fontSize: 16, fontWeight: '700' },
    dishDescription: { fontSize: 14, color: '#6B7280', marginTop: 4 },
    dishFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
    dishPrice: { fontSize: 18, fontWeight: '700' },
    addButton: { backgroundColor: '#111827', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
    addButtonText: { color: '#fff', fontWeight: '600' },
    cartFooter: { position: 'absolute', bottom: 0, left: 16, right: 16, backgroundColor: '#10B981', borderRadius: 16, padding: 16, marginBottom: 20 },
    cartSummary: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    cartItems: { color: '#fff', fontSize: 14 },
    cartTotal: { color: '#fff', fontSize: 18, fontWeight: '700' },
    cartButtonText: { color: '#fff', fontSize: 16, fontWeight: '700', textAlign: 'center' },
});

