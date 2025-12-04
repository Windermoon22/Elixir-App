import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../theme/Colors';
import QuantitySelector from '../component/QuantitySelector';
import { useCart } from '../store/cartStore';

export default function ItemScreen({ route, navigation }) {
  const { item } = route.params;
  const [qty, setQty] = React.useState(1);
  const add = useCart(state => state.add);

  const addToCart = () => {
    add({ ...item, qty });
    navigation.navigate('CheckoutTab');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.hero} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>{item.category}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>LKR {item.price}</Text>
          <QuantitySelector qty={qty} setQty={setQty} />
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  hero: { width: '100%', height: 260 },
  content: { padding: 16 },
  name: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  meta: { color: colors.muted, marginBottom: 8 },
  desc: { color: '#444', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  price: { fontSize: 18, fontWeight: '700' },
  button: { backgroundColor: colors.primary, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 14 },
  buttonText: { fontWeight: '700' },
});