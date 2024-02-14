import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Wallet {
  @Prop({ type: Types.ObjectId, ref: 'accounts', required: true }) // Define 'accountId' como una referencia directa al _id de 'Account'
  accountId: Types.ObjectId;
  @Prop({ required: true, default: 0 })
  walletBalance: number;
  @Prop({ required: true, default: 'A' })
  walletStatus: string;
  @Prop({ required: false })
  createdAt: Date;
  @Prop({ required: false })
  updatedAt: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
