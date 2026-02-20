import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Instagram, Facebook, Twitter, MapPin, Clock } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // expose icons
  Instagram = Instagram;
  Facebook = Facebook;
  Twitter = Twitter;
  MapPin = MapPin;
  Clock = Clock;
}
