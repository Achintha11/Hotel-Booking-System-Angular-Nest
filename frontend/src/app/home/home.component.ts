import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, CalendarModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data: any;
  options: any;

  constructor(private router: Router) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Expenses',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Months',
            color: '#911',
            font: {
              family: 'Comic Sans MS',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2,
            },
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Values',
            color: '#191',
            font: {
              family: 'Times',
              size: 15,
              style: 'italic',
              lineHeight: 1.2,
            },
          },
        },
      },
    };
  }

  navigateToAddBooking() {
    this.router.navigate(['/bookings/add-booking']);
  }
}
