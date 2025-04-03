import { create } from 'zustand';

// Obtener carrito desde localStorage
const getStoredCart = () => JSON.parse(localStorage.getItem('cart')) || [];

// Crear el store de Zustand
const useCartStore = create((set, get) => ({
  cart: getStoredCart(),
  addingToCart: false,

  addToCart: product => {
    set(state => {
      const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
      let updatedCart;

      if (existingProductIndex !== -1) {
        updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += product.quantity;
      } else {
        updatedCart = [...state.cart, { ...product }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  removeFromCart: productId => {
    set(state => {
      const updatedCart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  setAddingToCart: status => set({ addingToCart: status }),
}));

export default useCartStore;
