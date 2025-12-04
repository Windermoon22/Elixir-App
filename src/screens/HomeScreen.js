import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import data from '../data/resturant.json'; // your JSON with restaurants/items
// make sure this path matches your file

// Example categories – replace icons with your own local images
const CATEGORIES = [
    { id: '1', label: 'Sandwich', icon: require('../../assets/images/sandnwich.png') },
    { id: '2', label: 'Oats', icon: require('../../assets/images/oats.png') },
    { id: '3', label: 'Soup', icon: require('../../assets/images/mini-soup.png') },
    { id: '4', label: 'Salads', icon: require('../../assets/images/salad-mini.png') },
    { id: '5', label: 'Smoothies', icon: require('../../assets/images/smoothies.png') },
];


export default function HomeScreen({ navigation }) {
    const [query, setQuery] = React.useState('');

    // assume data is an array of restaurants like in your JSON
    const restaurants = data;

    const filteredRestaurants = restaurants.filter(r =>
        r.name.toLowerCase().includes(query.toLowerCase())
    );

    const renderRestaurant = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Restaurant', { resturant: item })}
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardMeta}>{item.fee}</Text>
                <Text style={styles.cardMeta}>
                    {item.rating}★ · {item.reviews} · {item.time}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.root}>
            {/* top bar */}
            <View style={styles.topBar}>
                <View style={styles.locationRow}>
                    <Text style={styles.locationText}>82 Newham Square</Text>
                    <Ionicons name="chevron-down" size={16} color="#111" />
                </View>
                <View style={styles.topIcons}>
                    <Ionicons name="notifications-outline" size={22} color="#111" />
                    <Ionicons name="heart-outline" size={22} color="#111" style={{ marginLeft: 16 }} />
                </View>
            </View>

            {/* search */}
            <View style={styles.searchBox}>
                <Ionicons name="search" size={18} color="#9CA3AF" />
                <TextInput
                    placeholder="Search"
                    value={query}
                    onChangeText={setQuery}
                    style={styles.searchInput}
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            {/* banner */}
            <View style={styles.banner}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.bannerTitle}>Freshen up with a garden salad</Text>
                    <Text style={styles.bannerSubtitle}>50% OFF until Dec 01</Text>
                </View>
                <Image
                    source={require('../../assets/images/banner-salad.png')}
                    style={styles.bannerImage}
                />
            </View>

            {/* categories */}
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 16 }}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <View style={styles.categoryIconWrapper}>
                            <Image source={item.icon} style={styles.categoryIcon} />
                        </View>
                        <Text style={styles.categoryLabel}>{item.label}</Text>
                    </View>
                )}
            />

            {/* featured restaurants */}
            <Text style={styles.sectionTitle}>Featured on Elixir</Text>

            <FlatList
                data={filteredRestaurants}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100, paddingTop: 8 }}
                renderItem={renderRestaurant}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#c79c28ff', // or colors.bg if you have that
        paddingHorizontal: 16,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    locationRow: { flexDirection: 'row', alignItems: 'center' },
    locationText: { fontSize: 14, fontWeight: '600', color: '#111' },
    topIcons: { flexDirection: 'row', alignItems: 'center' },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7e3333ff',
        borderRadius: 999,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginTop: 12,
    },
    searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#111' },
    banner: {
        flexDirection: 'row',
        backgroundColor: '#111827',
        borderRadius: 16,
        padding: 14,
        marginTop: 16,
        alignItems: 'center',
    },
    bannerTitle: { color: '#fff', fontSize: 14, fontWeight: '700' },
    bannerSubtitle: { color: '#E5E7EB', fontSize: 12, marginTop: 4 },
    bannerImage: { width: 90, height: 70, borderRadius: 10, marginLeft: 8 },
    categoryItem: { alignItems: 'center', marginRight: 16 },
    categoryIconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 999,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    categoryIcon: { width: 40, height: 40, borderRadius: 999 },
    categoryLabel: { fontSize: 12, color: '#111' },
    sectionTitle: { marginTop: 4, marginBottom: 8, fontSize: 16, fontWeight: '600', color: '#111' },
    card: {
        marginBottom: 12,
        borderRadius: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    cardImage: { width: '100%', height: 150 },
    cardInfo: { padding: 10 },
    cardTitle: { fontSize: 15, fontWeight: '600', color: '#111827' },
    cardMeta: { fontSize: 12, color: '#6B7280', marginTop: 2 },
});

