import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
});
