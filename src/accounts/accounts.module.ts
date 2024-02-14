import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import { Wallet, WalletSchema } from 'src/wallet/schemas/wallet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    MongooseModule.forFeature([{ name: Wallet.name, schema: WalletSchema }]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
