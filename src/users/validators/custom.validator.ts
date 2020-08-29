import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'invalidPassword', async: false })
export class CustomPasswordValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const regex = new RegExp('^(?=.*[A-Z])((?=.*[0-9])(?=.*[@#$%^&+=]))');
    return text.length === 8 && regex.test(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Password is invalid (must be : 8 char, one digit, one special character, one capital letter)';
  }
}