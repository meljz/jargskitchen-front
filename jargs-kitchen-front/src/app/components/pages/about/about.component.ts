import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule, CheckCircle2 } from 'lucide-angular'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
   @Input() onNavigate!: (page: string) => void

  CheckCircle2 = CheckCircle2

  features = [1, 2, 3]

  burgers = [
    {
      name: 'Classic Smash',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    },
    {
      name: 'Double Trouble',
      img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80',
    },
    {
      name: 'Spicy Deluxe',
      img: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=800&q=80',
    },
  ]

  navigate(page: string) {
    if (this.onNavigate) {
      this.onNavigate(page)
    }
  }
}
