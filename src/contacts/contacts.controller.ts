import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { Request, Response } from 'express';
@Controller('contacts')
export class ContactsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Helo World!');
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
