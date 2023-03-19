import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { config } from './configs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  ping(): string {
    return 'Service online: ' + config.serviceName;
  }
}
