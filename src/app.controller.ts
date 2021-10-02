import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello there';
  }

  @Get('new')
  newEndpoint() {
    return 'I am new';
  }

  @Get('/route/')
  hello() {
    return 'with /sas/';
  }
}
