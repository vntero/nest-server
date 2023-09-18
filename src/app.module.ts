import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ContactsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule {}
