import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  LucideAngularModule,
  Plus,
  Minus,
  ShoppingCart, 
} from 'lucide-angular'
//import { SlideInOnScrollDirective } from "../../../slide-in-on-scroll.directive";
import { CartService } from '../../../services/cart.service';

type Category = 'Burgers' | 'Sides' | 'Chicken'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: Category
  image: string
  popular?: boolean
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LucideAngularModule /*SlideInOnScrollDirective*/],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() onNavigate!: (page: string) => void

  constructor (private cartService: CartService) {}

  Plus = Plus
  Minus = Minus
  ShoppingCart = ShoppingCart

  categories: Category[] = ['Burgers', 'Sides', 'Chicken']
  activeCategory: Category = 'Burgers'
  cartCount = 0

  MENU_ITEMS: MenuItem[] = [
    {
      id: 1,
      name: "Jarg's Super Deluxe",
      description: 'Single patty, cheddar, lettuce, tomato, house sauce',
      price: 8.99,
      category: 'Sides',
      image:
        'images/menu1.jpg',
      popular: true,
    },
    {
      id: 1,
      name: "Jarg's Super Deluxe",
      description: 'Single patty, cheddar, lettuce, tomato, house sauce',
      price: 8.99,
      category: 'Sides',
      image:
        'images/menu2.jpg',
      popular: true,
    },
    {
      id: 1,
      name: "Jarg's Super Deluxe",
      description: 'Single patty, cheddar, lettuce, tomato, house sauce',
      price: 8.99,
      category: 'Burgers',
      image:
        'images/menu3.jpg',
      popular: true,
    },
    {
      id: 1,
      name: "Jarg's Deluxe",
      description: 'Single patty, cheddar, lettuce, tomato, house sauce',
      price: 8.99,
      category: 'Burgers',
      image:
        'images/menu4.jpg',
      popular: true,
    },
    {
      id: 2,
      name: "Jarg's Double",
      description: 'Double patty, double cheese, bacon, caramelized onions',
      price: 12.99,
      category: 'Burgers',
      image:
        'images/menu5.jpg',
      popular: true,
    },
    {
      id: 3,
      name: "Jarg's Supreme",
      description: 'Crispy chicken, jalapeños, spicy mayo, pepper jack',
      price: 10.99,
      category: 'Burgers',
      image:
        'images/menu6.jpg',
    },
    {
      id: 4,
      name: "Jarg's Cheese Burger",
      description: 'Double patty, double cheese, bacon, caramelized onions',
      price: 11.99,
      category: 'Burgers',
      image:
        'images/menu7.jpg',
    },
    {
      id: 5,
      name: "Jarg's Chicken",
      description: 'Golden shoestring fries with sea salt',
      price: 3.99,
      category: 'Chicken',
      image:
        'images/menu8.jpg',
    },
    {
      id: 6,
      name: "Jarg's Whole Chicken",
      description: 'Beer-battered thick cut onion rings',
      price: 4.99,
      category: 'Chicken',
      image:
        'images/menu9.jpg',
    }
    
  ]

  get filteredItems(): MenuItem[] {
    return this.MENU_ITEMS.filter(
      (item) => item.category === this.activeCategory
    )
  }

  setCategory(category: Category) {
    this.activeCategory = category
  }

 addToCart(item: any) { this.cartService.addToCart(item); }
}
