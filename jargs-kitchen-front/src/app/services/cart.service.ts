import { Injectable, signal, computed } from '@angular/core';
import { CartItem, MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);
  
  cart = this.cartItems.asReadonly();
  cartCount = computed(() => 
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );
  cartTotal = computed(() => 
    this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  addToCart(item: MenuItem): void {
    alert('Added to cart!')
    const currentCart = this.cartItems();
    const existingIndex = currentCart.findIndex(i => i.id === item.id);

    if (existingIndex > -1) {
      const updated = [...currentCart];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + 1
      };
      this.cartItems.set(updated);
    } else {
      this.cartItems.set([...currentCart, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(itemId: number): void {
    const currentCart = this.cartItems();
    const item = currentCart.find(i => i.id === itemId);

    if (item && item.quantity > 1) {
      const updated = currentCart.map(i => 
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
      this.cartItems.set(updated);
    } else {
      this.cartItems.set(currentCart.filter(i => i.id !== itemId));
    }
  }
  

  clearCart(): void {
    this.cartItems.set([]);
  }
}