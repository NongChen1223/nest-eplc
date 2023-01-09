import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/app')
  getHello(): string {
    return 'Hello NongChen';
  }
}
