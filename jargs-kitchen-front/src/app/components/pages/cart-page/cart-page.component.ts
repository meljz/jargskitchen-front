import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/menu-item.model';



@Component({
  selector: 'cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  private cartService = inject(CartService);
  
  cartItems = this.cartService.cart;   // signal
  cartCount = this.cartService.cartCount;


  get subtotal(): number {
    return this.cartService.cartTotal();
  }

  get deliveryFee(): number {
    return this.subtotal > 0 ? 2.99 : 0;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.deliveryFee + this.tax;
  }

  updateQuantity(item: CartItem, newQty: number) {
    const currentQty = item.quantity;
    if (newQty > currentQty) {
      // Add more items
      for (let i = 0; i < newQty - currentQty; i++) {
        this.cartService.addToCart(item);
      }
    } else if (newQty < currentQty) {
      // Remove items
      for (let i = 0; i < currentQty - newQty; i++) {
        this.cartService.removeFromCart(item.id);
      }
    }
  }


  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.id);
  }
}
