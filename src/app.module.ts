import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@localhost:27017/JAVA-YM?authSource=admin&authMechanism=SCRAM-SHA-1',
    ),
    AccountsModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
