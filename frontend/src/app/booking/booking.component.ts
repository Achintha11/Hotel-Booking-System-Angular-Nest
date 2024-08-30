import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';
import { Booking } from './add-booking/booking-data';
import { Router } from '@angular/router';
import { TableBookings } from '../booking-table/booking-table.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [TableBookings, ButtonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe({
      next: (response) => {
        console.log('Data received in BookingComponent:', response);
        if (response) {
          this.bookings = response; // Extract the bookingsData array
          console.log('Bookings:', this.bookings);
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching bookings:', err);
      },
    });
  }

  navigateToAddBooking() {
    this.router.navigate(['/bookings/add-booking']);
  }
}
