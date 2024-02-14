import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account {
  @Prop({ required: true })
  catalogId: number;
  @Prop({ required: true })
  accountEmail: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  accountName: string;
  @Prop({ required: true })
  accountPhoneNumber: string;
  @Prop({ required: true, type: '' })
  accountBirthday: Date;
  @Prop({ required: true, default: 'A' })
  accountStatus: string;
  @Prop({ required: false, default: Date.now() })
  createdAt: Date;
  @Prop({ required: false, default: Date.now() })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
