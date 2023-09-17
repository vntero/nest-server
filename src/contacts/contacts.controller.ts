import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  @Get()
  findAll(): string {
    return 'Get all contacts';
  }
}
