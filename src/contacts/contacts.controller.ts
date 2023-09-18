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
  findOne(@Param('id') id) {
    return `Contact ${id}`;
  }

  @Post()
  create(@Body() createContactDto: CreateContactDto): string {
    return `Name: ${createContactDto.name}, Phone: ${createContactDto.phone}, Email: ${createContactDto.email}`;
  }

  @Put(':id')
  update(
    @Body() updatedContactDto: CreateContactDto,
    @Param(':id') id,
  ): string {
    return `Updated ${id} - Name: ${updatedContactDto.name}, Phone: ${updatedContactDto.phone}, Email: ${updatedContactDto.email}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted ${id}`;
  }
}
