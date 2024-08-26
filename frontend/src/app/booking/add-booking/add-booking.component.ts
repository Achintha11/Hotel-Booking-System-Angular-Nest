import { Component } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

import {
  extras,
  roomTypes,
  roomNumbers,
  guestOptions,
  RoomType,
  Extra,
  Booking,
} from './booking-data';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../services/booking.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [
    ButtonModule,
    CalendarModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
  providers: [MessageService],
})
export class AddBookingComponent {
  bookingForm: FormGroup | any;
  items: SelectItem[];

  loading: boolean = false;

  extras = extras;
  roomTypes = roomTypes;
  roomNumbers = roomNumbers;
  guestOptions = guestOptions;

  selectedExtras: Extra[] = [];
  selectedRoomType: RoomType | null = null;

  discount: number = 0;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private messageService: MessageService
  ) {
    this.items = [];
    for (let i = 1; i <= 31; i++) {
      this.items.push({ label: i + ' Nights ', value: i });
    }
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      checkInDate: [''],
      duration: [''],
      checkOutDate: [{ value: '', disabled: true }],
      roomType: [''],
      roomNumber: [''],
      guests: [''],
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [''],
      extras: this.fb.array(this.extras.map(() => this.fb.control(false))),
    });

    // Subscribe to changes in the extras array
    this.extrasControls.valueChanges.subscribe((values) => {
      this.updateSelectedExtras();
    });
  }

  get extrasControls() {
    return this.bookingForm.get('extras') as FormArray;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.loading = true;

      const bookingData: Booking = this.bookingForm.getRawValue();

      this.bookingService.addBooking(bookingData).subscribe({
        next: (data) => {
          console.log('Booking added successfully:', data);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Booking submitted successfully!',
            life: 3000,
          });

          this.bookingForm.reset();
          this.loading = false;
        },
        error: (error) => {
          console.error('Error adding booking:', error);
          this.bookingForm.reset();

          this.loading = false;
        },
      });
    }
  }

  updateSelectedExtras() {
    this.selectedExtras = this.extrasControls.value
      .map((checked: boolean, i: number) => (checked ? this.extras[i] : null))
      .filter((v: any) => v !== null);
  }

  // Handle the change in check-in date
  onCheckInChange(date: Date | null): void {
    this.bookingForm.get('checkInDate')?.setValue(date);
    this.updateCheckOutDate();
  }
  // Handle the change in duration
  onDurationChange(duration: number | null): void {
    this.bookingForm.get('duration')?.setValue(duration);
    this.updateCheckOutDate();
  }

  // Update the check-out date based on check-in date and duration
  updateCheckOutDate(): void {
    const checkInDate = this.bookingForm.get('checkInDate')?.value;
    const duration = this.bookingForm.get('duration')?.value;

    if (checkInDate && duration) {
      const checkOutDate = new Date(checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + duration);
      this.bookingForm.get('checkOutDate')?.setValue(checkOutDate);
    }
  }

  //cost summary functions
  getRoomPrice(): number {
    const selectedRoom = this.roomTypes.find(
      (room) => room.value === this.bookingForm.get('roomType')?.value
    );
    const duration = this.bookingForm.get('duration')?.value || 0;
    const price = selectedRoom ? selectedRoom.price * duration : 0;
    return price;
  }

  getExtrasPrice(): number {
    const price = this.selectedExtras.reduce(
      (total, extra) => total + extra.price,
      0
    );
    return price;
  }

  getSubTotal(): number {
    const subTotal = this.getRoomPrice() + this.getExtrasPrice();
    // console.log('Subtotal:', subTotal);
    return subTotal;
  }

  getTotalPrice(): number {
    const totalPrice = this.getSubTotal() - this.discount;
    //  console.log('Total Price:', totalPrice);
    return totalPrice;
  }
}
