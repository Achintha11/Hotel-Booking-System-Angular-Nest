import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';

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
  ],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.scss',
})
export class AddBookingComponent {
  checkInDate: Date | null = null;
  selectedItem: number | null = null;
  checkOutDate: Date | null = null;
  items: SelectItem[];

  constructor() {
    this.items = [];
    for (let i = 1; i <= 31; i++) {
      this.items.push({ label: i + ' Nights ', value: i });
    }
  }

  onCheckInChange(date: Date | null): void {
    this.checkInDate = date;
    this.updateCheckOutDate();
  }

  onDurationChange(duration: number | null): void {
    this.selectedItem = duration;
    this.updateCheckOutDate();
  }

  updateCheckOutDate(): void {
    if (this.checkInDate && this.selectedItem) {
      const checkOutDate = new Date(this.checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + this.selectedItem);
      this.checkOutDate = checkOutDate;
    }
  }
}
