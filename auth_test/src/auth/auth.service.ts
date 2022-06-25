import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async signinLocal(signInDto: SignInDto) {
    const user = users.find((user) => user.username === signInDto.username);
    if (!user) throw new UnauthorizedException('User does Not exist');
    if (user.password !== signInDto.password)
      throw new UnauthorizedException('Undefined Credentials');
    return await this.signUser(user.id, user.email, 'user');
  }

  async signupLocal(signUpDto: SignUpDto) {
    return signUpDto;
  }

  async signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      claim: type,
    });
  }
}
