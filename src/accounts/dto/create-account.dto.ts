import { IsEmail } from 'class-validator';

export class CreateAccountDto {
  @IsEmail()
  username: string;
}
