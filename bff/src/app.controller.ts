import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from './interfaces/account-interface';
import { User } from './interfaces/user-interface';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('PUBSUB')
    private readonly client: ClientProxy, // private readonly appService: AppService,
  ) {}

  @Get('accounts')
  async getAccounts() {
    const users = this.client.send<User[]>(
      { cmd: 'get_users' },
      { page: 1, items: 10 },
    );
    return users;
  }
}
