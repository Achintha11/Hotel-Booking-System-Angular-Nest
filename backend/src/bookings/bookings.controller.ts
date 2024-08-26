import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Prisma } from '@prisma/client';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingService: BookingsService) {}

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Post()
  create(@Body() createBookingDto: Prisma.BookingCreateInput) {
    return this.bookingService.create(createBookingDto);
  }

  //   @Delete(':id')
  //   delete(@Param('id') id: string) {
  //     return this.bookingService.delete(id);
  //   }
}
