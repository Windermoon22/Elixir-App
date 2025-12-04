import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';
import { useCart } from '../store/cartStore';

export default function CheckoutScreen({ navigation }) {
    const items = useCart(state => state.items);
    const subtotal = useCart(state => state.subtotal());

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.meta}>Qty: {item.qty}</Text>
            </View>
            <Text style={styles.price}>LKR {(item.price * item.qty).toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>

            {items.length === 0 ? (
                <Text style={styles.empty}>Your cart is empty.</Text>
            ) : (
                <>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingVertical: 12 }}
                    />
                    <View style={styles.summary}>
                        <Text style={styles.subtotalLabel}>Subtotal</Text>
                        <Text style={styles.subtotalValue}>LKR {subtotal.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('PaymentTab')}
                    >
                        <Text style={styles.buttonText}>Go to payment</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg, padding: 25 },
    title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
    empty: { marginTop: 16, color: colors.muted },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 10,
        borderRadius: 12,
    },
    name: { fontWeight: '600' },
    price: { color: colors.muted },
});

