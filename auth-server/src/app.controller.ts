import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  #count: number;
  constructor(private readonly appService: AppService) {
    this.#count = 0;
  }

  @Get('auth')
  getHello(): string {
    this.#count += 1;
    console.log(this.#count);
    return `Auth Server on ${process.env.PORT}`;
  }
}
