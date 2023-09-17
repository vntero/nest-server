import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
@Controller('contacts')
export class ContactsController {
  @Get()
  findAll(): string {
    return 'Get all contacts';
  }

  @Get(':id')
  findOne(@Param() param) {
    return `Contact ${param.id}`;
  }

  @Post()
  create(@Body() createContactDto: CreateContactDto): string {
    return `Name: ${createContactDto.name}, Phone: ${createContactDto.phone}, Email: ${createContactDto.email}`;
  }

  @Put()
  update(): string {
    return 'Create Contact';
  }

  @Delete()
  delete(): string {
    return 'Create Contact';
  }
}
