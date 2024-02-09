import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  username: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
