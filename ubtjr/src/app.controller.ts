import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  healthcheck(): object {
    return { code: 200, message: this.appService.healthcheck() };
  }
}
