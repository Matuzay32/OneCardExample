import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './schemas/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
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
      const newAccount = await this.accountModel.create(createAccountDto);
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
