import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faqs-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faqs-page.component.html',
})
export class FaqsPageComponent {
  faqs = [
    {
      id: 1,
      question: 'Do you deliver late at night?',
      answer: `Absolutely! We know the cravings hit hardest after dark. 
      We deliver until 2:00 AM on Fridays and Saturdays, and until 10:00 PM on weekdays. 
      You can order directly through our website or via major delivery apps.`,
      icon: 'truck',
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: `We accept all major credit/debit cards (Visa, Mastercard), 
      GCash, Maya, and cash for dine-in orders. 
      Website delivery orders are strictly cashless for faster service.`,
      icon: 'credit-card',
    },
    {
      id: 3,
      question: 'Do you offer vegetarian options?',
      answer: `Yes! We have a "Plant-Based Smash" made from mushroom 
      and bean blend. We also offer vegetarian-friendly sides like 
      Truffle Fries and Onion Rings.`,
      icon: 'leaf',
    },
    {
      id: 4,
      question: 'Is there a delivery fee?',
      answer: `Delivery is FREE for orders above ₱1,500 within a 5km radius. 
      Otherwise, a standard delivery fee applies based on your location.`,
      icon: 'message-circle',
    },
  ];
}
