import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import {
  LucideAngularModule,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from 'lucide-angular'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  // icons
  MapPin = MapPin
  Phone = Phone
  Mail = Mail
  Clock = Clock
  Send = Send

  // form model
  form = {
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  }

  submitForm() {
    console.log('Form submitted:', this.form)
    // later: API call here
  }
}
