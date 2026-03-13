import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../../services/contact.service';
import {
  LucideAngularModule,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, LucideAngularModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  MapPin = MapPin;
  Phone = Phone;
  Mail = Mail;
  Clock = Clock;
  Send = Send;

  form = {
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  };

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService,
  ) {}

  submitForm() {
    this.contactService.sendMessage(this.form).subscribe({
      next: (res) => {
        //alert('Message sent!');
        this.toastr.success('Message sent, thank you!')
        this.form = { name: '', email: '', subject: 'General Inquiry', message: '' };
      },
      error: (err) => {
        console.error(err);
        //alert('Error sending message.');
        this.toastr.warning('Message did not sent. Please try again.')
      },
    });
  }
}