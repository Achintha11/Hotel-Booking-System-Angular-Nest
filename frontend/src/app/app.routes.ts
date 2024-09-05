import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuard],

    component: HomeComponent,
  },

  {
    path: 'rooms',
    canActivate: [AuthGuard],
    component: RoomComponent,
  },
  {
    path: 'bookings',
    canActivate: [AuthGuard],

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
    canActivate: [AuthGuard],

    component: GuestComponent,
  },
];
