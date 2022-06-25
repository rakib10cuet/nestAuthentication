import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signinLocal(@Body() body: SignInDto) {
    return await this.authService.signinLocal(body);
  }

  @Post('signup')
  async signupLocal(@Body() body: SignUpDto) {
    return await this.authService.signupLocal(body);
  }
}
