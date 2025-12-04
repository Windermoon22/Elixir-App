import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/Colors';

export default function FoodCard({ item, onPress })

{return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.calories} kcal • {item.time} min</Text>
            <Text style={styles.price}>LKR {item.price.toFixed(2)}</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    card: { flex: 1, backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', padding: 10, marginBottom: 12 },
    cover: { width: '100%', height: 110, borderRadius: 10, marginBottom: 8 },
    name: { fontWeight: '700' },
    meta: { color: '#666', fontSize: 12, marginTop: 2 },
    price: { color: colors.primaryDark, fontWeight: '700', marginTop: 6 },
});
