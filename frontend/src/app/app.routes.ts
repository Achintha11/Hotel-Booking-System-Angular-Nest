import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponentComponent,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'rooms',
    component: RoomComponent,
  },
  {
    path: 'bookings',
    children: [
      {
        path: '',
        component: BookingComponent, // Show the BookingComponent when accessing /bookings
      },
      {
        path: 'add-booking',
        component: AddBookingComponent, // Show the AddBookingComponent when accessing /bookings/add-booking
      },
    ],
  },
  {
    path: 'guests',
    component: GuestComponent,
  },
];
