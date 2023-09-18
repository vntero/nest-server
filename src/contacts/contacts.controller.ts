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
import { ContactsService } from './contacts.service';
import { Contact } from './interfaces/contact.interface';
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll(): Contact[] {
    return this.contactsService.findAll();
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
