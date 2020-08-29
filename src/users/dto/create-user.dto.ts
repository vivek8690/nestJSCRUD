import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { CustomPasswordValidator } from '../validators/custom.validator';

export class CreateUserDto {

  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Validate(CustomPasswordValidator)
  readonly password: string;

}