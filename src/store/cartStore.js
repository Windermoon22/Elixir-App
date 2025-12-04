import { create } from 'zustand';

export const useCart = create((set, get) => ({
    items: [],
    add(item) {
        const items = get().items.slice();
        const idx = items.findIndex(i => i.id === item.id);
        if (idx >= 0) items[idx].qty += item.qty || 1;
        else items.push({ ...item, qty: item.qty || 1 });
        set({ items });
    },
    remove(id) {
        set({ items: get().items.filter(i => i.id !== id) });
    },
    updateQty(id, qty) {
        set({
            items: get().items.map(i =>
                i.id === id ? { ...i, qty } : i
            ),
        });
    },
    clear() {
        set({ items: [] });
    },
    subtotal() {
        return get().items.reduce((s, i) => s + i.price * i.qty, 0);
    },
}));
