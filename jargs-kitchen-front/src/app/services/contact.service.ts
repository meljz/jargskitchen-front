import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8000/api'; // local
  // private apiUrl = 'https://jargskitchen.online/api'; // production

  constructor(private http: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    // Optional: if your API requires headers, e.g., JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/contact`, data, { headers });
  }
}