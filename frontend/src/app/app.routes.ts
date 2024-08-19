import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'add-booking',
    component: AddBookingComponent,
  },
  {
    path: 'rooms',
    component: RoomComponent,
  },
  {
    path: 'bookings',
    component: BookingComponent,
  },
  {
    path: 'guests',
    component: GuestComponent,
  },
];
