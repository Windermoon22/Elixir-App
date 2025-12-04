import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
    { id: '1', label: 'Sandwich', icon: require('../../assets/images/sandnwich.png') },
    { id: '2', label: 'Oats', icon: require('../../assets/images/oats.png') },
    { id: '3', label: 'Soup', icon: require('../../assets/images/mini-soup.png') },
    { id: '4', label: 'Salads', icon: require('../../assets/images/salad-mini.png') },
    { id: '5', label: 'Smoothies', icon: require('../../assets/images/smoothies.png') },
];

const Restaurant = [
    { id: '1', name: 'Soup Plaza', image: require('../../assets/images/soup-plaza.png'), fee: 'Delivery fee: 50', rating: 4.5, reviews: 120, time: '30 mins' },
    { id: '2', name: 'Salad Cafe', image: require('../../assets/images/salad-cafe.png'), fee: 'Delivery fee: 80', rating: 4.8, reviews: 95, time: '25 mins' },
];

type Props = { navigation: any };

export default function HomeScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.locationRow}>
                    <Text style={styles.locationText}>82 Newham Square</Text>
                    <Ionicons name="chevron-down" size={16} color="#111" />
                </TouchableOpacity>
                <View style={styles.topIcons}>
                    <Ionicons name="notifications-outline" size={22} color="#111" />
                    <Ionicons name="heart-outline" size={22} color="#111" style={{ marginLeft: 16 }} />
                </View>
            </View>

            <View style={styles.searchBox}>
                <Ionicons name="search" size={18} color="#9CA3AF" />
                <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor="#9CA3AF" />
            </View>

            <View style={styles.banner}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.bannerTitle}>Freshen up with a garden salad</Text>
                    <Text style={styles.bannerSubtitle}>50% OFF until Dec 01</Text>
                </View>
                <Image source={require('../../assets/images/banner-salad.png')} style={styles.bannerImage} />
            </View>

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 12 }}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <View style={styles.categoryIconWrapper}>
                            <Image source={item.icon} style={styles.categoryIcon} />
                        </View>
                        <Text style={styles.categoryLabel}>{item.label}</Text>
                    </View>
                )}
            />

            <Text style={styles.sectionTitle}>Featured on Elixir</Text>

            <FlatList
                data={Restaurant}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 90 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Restaurant', { restaurant: item })}
                    >
                        <Image source={item.image} style={styles.cardImage} />
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardMeta}>{item.fee}</Text>
                            <Text style={styles.cardMeta}>{item.rating}★ · {item.reviews} · {item.time}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.tabBar}>
                <Ionicons name="home" size={30} color="#fab158ff" />
                <Ionicons name="compass-outline" size={30} color="#111" />
                <Ionicons name="receipt-outline" size={30} color="#111" />
                <View style={styles.cartIconWrapper}>
                    <Ionicons name="cart-outline" size={30} color="#111" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#f6d079ff', paddingHorizontal: 16 },
    topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
    locationRow: { flexDirection: 'row', alignItems: 'center' },
    locationText: { fontSize: 14, fontWeight: '600', color: '#0d0d0dff' },
    topIcons: { flexDirection: 'row', alignItems: 'center' },
    searchBox: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffffff', borderRadius: 999,
        paddingHorizontal: 14, paddingVertical: 8, marginTop: 12,
    },
    searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#111' },
    banner: {
        flexDirection: 'row', backgroundColor: '#111827', borderRadius: 16, padding: 14,
        marginTop: 16, alignItems: 'center',
    },
    bannerTitle: { color: '#fbf9f9ff', fontSize: 14, fontWeight: '700' },
    bannerSubtitle: { color: '#E5E7EB', fontSize: 12, marginTop: 4 },
    bannerImage: { width: 90, height: 70, borderRadius: 10, marginLeft: 8 },
    categoryItem: { alignItems: 'center', marginRight: 16 },
    categoryIconWrapper: {
        width: 60, height: 60, borderRadius: 999, backgroundColor: '#e5e2e2ff',
        justifyContent: 'center', alignItems: 'center', marginBottom: 6,
    },
    categoryIcon: { width: 40, height: 40, borderRadius: 999 },
    categoryLabel: { fontSize: 12, color: '#000000ff' },
    sectionTitle: { marginTop: 8, fontSize: 16, fontWeight: '700', color: '#111', marginBottom: 12 },
    card: { marginBottom: 16, backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' },
    cardImage: { width: '100%', height: 200, borderRadius: 12 },
    cardInfo: { padding: 12 },
    cardTitle: { fontSize: 14, fontWeight: '700', color: '#010101ff' },
    cardMeta: { fontSize: 12, color: '#5f5f60ff', marginTop: 4 },
    tabBar: {
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
        paddingVertical: 20, position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#fbecc8ff',
    },
    cartIconWrapper: { width: 50, height: 50, borderRadius: 999, backgroundColor: '#feeae0ff', justifyContent: 'center', alignItems: 'center' },
});
