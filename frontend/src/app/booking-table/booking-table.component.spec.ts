import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookings } from './booking-table.component';

describe('TableBookings', () => {
  let component: TableBookings;
  let fixture: ComponentFixture<TableBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBookings],
    }).compileComponents();

    fixture = TestBed.createComponent(TableBookings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
