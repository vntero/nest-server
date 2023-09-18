import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {
  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  email: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
