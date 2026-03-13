import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/menu-item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8000/api'; // your API URL

  constructor(private http: HttpClient, private auth: AuthService) {}

  placeOrder(cartItems: CartItem[]): Observable<any> {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const orderData = {
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalAmount,
    };

    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });

    return this.http.post(`${this.apiUrl}/order`, orderData, { headers });
  }

  getOrderById(orderId: number): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : '',
    });
    return this.http.get(`${this.apiUrl}/orders/${orderId}`, { headers });
  }
}