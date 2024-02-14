import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './schemas/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from 'src/wallet/schemas/wallet.schema';
import { CreateWalletDto } from 'src/wallet/dto/create-wallet.dto'; // Importa el DTO de creación de billetera

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>, // Agrega el modelo de Wallet
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const { accountEmail } = createAccountDto;
    const existingAccount = await this.accountModel.findOne({ accountEmail });

    if (existingAccount) {
      throw new HttpException(
        'The account already exists',
        HttpStatus.CONFLICT,
      );
    }

    try {
      // Crear la cuenta
      const newAccount = await this.accountModel.create(createAccountDto);

      // Crear la billetera asociada a la cuenta
      const createWalletDto: CreateWalletDto = {
        accountId: newAccount.id, // Asigna el ID de la nueva cuenta
        walletBalance: 0, // Puedes establecer un saldo inicial si lo deseas
        walletStatus: 'A',
      };
      await this.walletModel.create(createWalletDto);

      return newAccount;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(error.message),
        },
      );
    }
  }
  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
