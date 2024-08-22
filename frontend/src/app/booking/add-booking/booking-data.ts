// booking-data.ts

export type RoomType = 'single' | 'double' | 'suite' | 'deluxe' | 'family';

export interface Extra {
  label: string;
  value: string;
  price: number;
}

export const extras: Extra[] = [
  { label: 'Wi-Fi', value: 'wifi', price: 10 },
  { label: 'Breakfast', value: 'breakfast', price: 20 },
  { label: 'Parking', value: 'parking', price: 5 },
  { label: 'Airport Shuttle', value: 'shuttle', price: 25 },
  { label: 'Gym Access', value: 'gym', price: 15 },
  { label: 'Pool Access', value: 'pool', price: 10 },
  { label: 'Late Checkout', value: 'late_checkout', price: 30 },
  { label: 'Mini Bar', value: 'minibar', price: 40 },
];

export const roomTypes = [
  { label: 'Single', value: 'single', price: 100 },
  { label: 'Double', value: 'double', price: 150 },
  { label: 'Suite', value: 'suite', price: 200 },
  { label: 'Deluxe', value: 'deluxe', price: 250 },
  { label: 'Family', value: 'family', price: 300 },
];

export const roomNumbers = [
  { label: '101', value: '101' },
  { label: '102', value: '102' },
  { label: '201', value: '201' },
  { label: '202', value: '202' },
  { label: '301', value: '301' },
  { label: '302', value: '302' },
];

export const guestOptions = [
  { label: '1 Guest', value: '1' },
  { label: '2 Guests', value: '2' },
  { label: '3 Guests', value: '3' },
  { label: '4 Guests', value: '4' },
  { label: '5 Guests', value: '5' },
];

import { FormArray, FormControl } from '@angular/forms';

export interface Booking {
  checkInDate: string;
  duration: number; // Duration in days
  checkOutDate: string;
  roomType: string;
  roomNumber: string;
  guests: number;
  fullName: string;
  email: string;
  mobileNumber: string;
  extras: string; // Assuming extras are boolean options
  // status: 'Pending' | 'Confirmed' | 'Checked-in' | 'Checked-out' | 'Cancelled';
  // bookingDate: string; // Date the booking was made
  // totalCost: number;
}
