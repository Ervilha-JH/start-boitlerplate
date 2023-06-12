import { Controller, Get } from '@nestjs/common';
import { AppService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_users' })
  async getUsers() {
    return await this.appService.getUsers();
  }
}
