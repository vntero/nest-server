import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  private readonly contacts: Contact[] = [
    {
      id: '123',
      name: 'Hugo',
      phone: 920332560,
      email: 'hugo@email.com',
    },
    {
      id: '123456',
      name: 'Hugo Two',
      phone: 920123456,
      email: 'two@email.com',
    },
  ];

  findAll(): Contact[] {
    return this.contacts;
  }

  findOne(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id);
  }
}
