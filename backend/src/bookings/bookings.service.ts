import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BookingsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.booking.findMany();
  }

  async create(createBookingDto: Prisma.BookingCreateInput) {
    return this.databaseService.booking.create({
      data: createBookingDto,
    });
  }
}
