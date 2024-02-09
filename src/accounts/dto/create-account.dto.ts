import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  @IsNotEmpty()
  catalogId: number;

  @IsEmail()
  @IsNotEmpty()
  accountEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  accountName: string;

  @IsString()
  @IsNotEmpty()
  accountPhoneNumber: string;

  @IsDateString() // Validará si la cadena es una fecha válida
  @IsNotEmpty()
  accountBirthday: Date;
}
