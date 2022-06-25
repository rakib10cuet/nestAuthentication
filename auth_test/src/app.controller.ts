import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { UserPayload } from './auth/decorator';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@UserPayload() req: any): string {
    console.log(req);
    return this.appService.getHello();
  }
}
