import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../add-booking/booking-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/bookings';

  constructor(private http: HttpClient) {}

  addBooking(booking: any) {
    return this.http.post(this.apiUrl, booking);
  }

  getBookings(): Observable<{ bookingsData: Booking[] }> {
    return this.http.get<{ bookingsData: Booking[] }>(this.apiUrl);
  }
}
