import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../models/menu-item.model';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {
  item = input.required<MenuItem>();
  addToCart = output<MenuItem>();
}
