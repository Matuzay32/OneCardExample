import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;
  @IsNumber()
  @IsNotEmpty()
  walletBalance: number;
  @IsString()
  walletStatus: string;
}
