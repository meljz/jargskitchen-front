// src/app/components/pages/cart-page/cart-page.component.ts
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/menu-item.model';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cart-page',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, RouterLink, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);

  // store last order for mini receipt
  lastOrder: any = null;

  constructor(private toastr: ToastrService) {}

  get cartItemsList(): CartItem[] {
    return this.cartService.cart();
  }

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
      for (let i = 0; i < newQty - currentQty; i++) {
        this.cartService.addToCart(item);
      }
    } else if (newQty < currentQty) {
      for (let i = 0; i < currentQty - newQty; i++) {
        this.cartService.removeFromCart(item.id);
      }
    }
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.id);
  }

  checkout() {
    const cartItems = this.cartItemsList;
    if (cartItems.length === 0) return;

    this.orderService.placeOrder(cartItems).subscribe({
      next: (res) => {
        console.log('Order saved in backend:', res);
        this.toastr.success('Order submitted successfully!');
        // save order for mini receipt
        this.lastOrder = res.order;
        this.cartService.clearCart();
      },
      error: (err) => {
        console.error('Order submission failed:', err);
        this.toastr.error('Order failed to submit, please try again.', err);
      },
    });
  }
}