import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
