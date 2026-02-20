import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = signal<MenuItem[]>([
    {
      id: 1,
      name: 'Classic Jargs Burger',
      description: 'Beef patty, lettuce, tomato, special sauce',
      price: 8.99,
      category: 'burger',
      image: '🍔',
      popular: true
    },
    {
      id: 2,
      name: 'Bacon Cheeseburger',
      description: 'Double beef, crispy bacon, cheddar cheese',
      price: 10.99,
      category: 'burger',
      image: '🍔',
      popular: true
    },
    {
      id: 3,
      name: 'Spicy Jalapeño Burger',
      description: 'Spicy patty, jalapeños, pepper jack cheese',
      price: 9.99,
      category: 'burger',
      image: '🍔'
    },
    {
      id: 4,
      name: 'Mushroom Swiss Burger',
      description: 'Sautéed mushrooms, Swiss cheese, truffle mayo',
      price: 10.49,
      category: 'burger',
      image: '🍔'
    },
    {
      id: 5,
      name: 'BBQ Bacon Burger',
      description: 'BBQ sauce, crispy onions, bacon, cheddar',
      price: 11.49,
      category: 'burger',
      image: '🍔'
    },
    {
      id: 6,
      name: 'Veggie Delight Burger',
      description: 'Plant-based patty, avocado, fresh veggies',
      price: 8.49,
      category: 'burger',
      image: '🥗'
    },
    {
      id: 7,
      name: 'Classic Fries',
      description: 'Golden crispy potato fries',
      price: 3.99,
      category: 'fries',
      image: '🍟',
      popular: true
    },
    {
      id: 8,
      name: 'Cheese Fries',
      description: 'Loaded with melted cheddar cheese',
      price: 5.49,
      category: 'fries',
      image: '🍟'
    },
    {
      id: 9,
      name: 'Truffle Parmesan Fries',
      description: 'Truffle oil, fresh parmesan, herbs',
      price: 6.99,
      category: 'fries',
      image: '🍟',
      popular: true
    },
    {
      id: 10,
      name: 'Chili Cheese Fries',
      description: 'Beef chili, cheese sauce, green onions',
      price: 7.49,
      category: 'fries',
      image: '🍟'
    },
    {
      id: 11,
      name: 'Sweet Potato Fries',
      description: 'Crispy sweet potato with honey drizzle',
      price: 4.99,
      category: 'fries',
      image: '🍟'
    }
  ]);

  items = this.menuItems.asReadonly();

  getItemsByCategory(category: 'burger' | 'fries'): MenuItem[] {
    return this.menuItems().filter(item => item.category === category);
  }

  getPopularItems(): MenuItem[] {
    return this.menuItems().filter(item => item.popular);
  }

  // TODO: Replace with HTTP calls when backend is ready
  // Example:
  // constructor(private http: HttpClient) {}
  // 
  // async loadMenuFromAPI(): Promise<void> {
  //   const items = await firstValueFrom(
  //     this.http.get<MenuItem[]>('http://localhost:3000/api/menu')
  //   );
  //   this.menuItems.set(items);
  // }
}