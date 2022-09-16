import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  #count: number;
  constructor(private readonly appService: AppService) {
    this.#count = 0;
  }

  @Get('chat')
  getHello(@Req() req: Request): string {
    this.#count += 1;
    console.log(this.#count);
    console.log(req.ip);
    return `Chat Server on ${process.env.PORT}`;
  }
}
