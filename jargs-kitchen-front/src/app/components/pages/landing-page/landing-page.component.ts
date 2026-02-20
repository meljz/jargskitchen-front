import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { SlideInOnScrollDirective } from '../../../slide-in-on-scroll.directive';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, CommonModule, SlideInOnScrollDirective],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '800ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
  ],
})
export class LandingPageComponent {

  //cart
  cart: any[] = [];

  menuItems = [
    {
      name: "Jarg's Super Deluxe",
      price: '99',
      description:
        'Single patty, cheddar, lettuce, tomato, house sauce',
      image: '/images/burger3.jpg',
    },
    {
      name: 'Jargs Whole Chicken',
      price: '230',
      description:
        'Crispy chicken, jalapeños, spicy mayo, pepper jack',
      image: '/images/chicken-menu.jpg',
    },
    {
      name: 'Jargs Cheese Burger',
      price: '69',
      description:
        'Double patty, double cheese, bacon, caramelized onions',
      image: '/images/burger.jpg',
    }
  ];

  steps = [
    {
      icon: '🔍',
      title: 'BROWSE THE MENU',
      desc: 'Check out our handcrafted selection of burgers, sides, and shakes.',
    },
    {
      icon: '🛍️',
      title: 'PLACE YOUR ORDER',
      desc: 'Quick and easy. Just a few taps and your feast is being prepped.',
    },
    {
      icon: '🍴',
      title: 'ENJOY THE FEAST',
      desc: 'Fresh food, delivered to your door or ready for pickup in minutes.',
    },
  ];

  addToCart(item: any) { this.cart.push(item); console.log('Cart:', this.cart); }
}
