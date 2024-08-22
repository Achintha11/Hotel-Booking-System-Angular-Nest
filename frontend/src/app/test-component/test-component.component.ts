import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CheckboxModule,
    CommonModule,
    ToastModule,
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  providers: [MessageService],
})
export class TestComponentComponent {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}

// logic to total price

// getRoomPrice(): number {
//   const selectedRoom = this.roomTypes.find(
//     (room) => room.value === this.fb.roomType.value
//   );
//   const duration = this.bookingForm.get('duration')?.value || 0;
//   const price = selectedRoom ? selectedRoom.price * duration : 0;
//   //console.log('Room Price:', price);
//   return price;
// }

// getExtrasPrice(): number {
//   const price = this.extras
//     .filter((extra) => this.selectedExtras.includes(extra.price))
//     .reduce((total, extra) => total + extra.price, 0);
//   console.log('Extras Price:', price);
//   return 0;
// }

// getSubTotal(): number {
//   const subTotal = this.getRoomPrice() + this.getExtrasPrice();
//   // console.log('Subtotal:', subTotal);
//   return subTotal;
// }

// getTotalPrice(): number {
//   const totalPrice = this.getSubTotal() - this.discount;
//   //  console.log('Total Price:', totalPrice);
//   return totalPrice;
// }
