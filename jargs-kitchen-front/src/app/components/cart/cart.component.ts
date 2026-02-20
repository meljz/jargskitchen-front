import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  close = output<void>();

  constructor(public cartService: CartService) {}

  addItem(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  checkout(): void {
    // TODO: Implement checkout with backend
    const orderData = {
      items: this.cartService.cart(),
      total: this.cartService.cartTotal(),
      timestamp: new Date().toISOString()
    };
    
    console.log('Order to submit:', orderData);
    alert('Checkout will be implemented with backend integration');
    
    // Example future implementation:
    // this.http.post('/api/orders', orderData).subscribe({
    //   next: (response) => {
    //     console.log('Order submitted:', response);
    //     this.cartService.clearCart();
    //     this.close.emit();
    //   },
    //   error: (error) => console.error('Order failed:', error)
    // });
  }
}
