import { Controller } from '@nestjs/common';
import { AppService } from './account.service';
import { MessagePattern } from '@nestjs/microservices';
import { Account } from './interfaces/account-interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_accounts' })
  getAccounts(): Account[] {
    return this.appService.getAccounts();
  }
}
