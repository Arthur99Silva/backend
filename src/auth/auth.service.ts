import {
  Injectable,
  ConflictException,
  UnauthorizedException
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private users = [] as Array<{
    id: number;
    name: string;
    email: string;
    password: string;
  }>;
  private idSeq = 1;

  /** cadastro já existente */
  async register(dto: RegisterUserDto): Promise<UserResponseDto> {
    if (this.users.find(u => u.email === dto.email)) {
      throw new ConflictException('E-mail já cadastrado');
    }
    const user = { id: this.idSeq++, ...dto };
    this.users.push(user);
    const { password, ...rest } = user;
    return rest;
  }

  /** login simples: verifica usuário + senha */
  async login(dto: LoginDto): Promise<{ token: string }> {
    const user = this.users.find(
      u => u.email === dto.email && u.password === dto.password
    );
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    // aqui você geraria um JWT, mas para teste vamos retornar um token fake
    return { token: `fake-token-for-user-${user.id}` };
  }
}
