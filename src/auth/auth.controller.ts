import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  public async register(
    @Body() dto: RegisterUserDto
  ): Promise<UserResponseDto> {
    return this.auth.register(dto);
  }

  @Post('login')
  public async login(
    @Body() dto: LoginDto
  ): Promise<{ token: string }> {
    return this.auth.login(dto);
  }
}
