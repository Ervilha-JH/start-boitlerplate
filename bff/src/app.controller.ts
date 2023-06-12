import { Controller, Get, Inject } from '@nestjs/common';
import { Profile } from './interfaces/account-interface';
import { User } from './interfaces/user-interface';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USER')
    private readonly userClient: ClientProxy, // private readonly appService: AppService,
    @Inject('PROFILE')
    private readonly profileClient: ClientProxy, // private readonly appService: AppService,
  ) {}

  @Get('accounts')
  async getAccounts() {
    const users = await this.userClient
      .send<User[]>({ cmd: 'get_users' }, { page: 1, items: 10 })
      .toPromise();
    const profiles = await this.profileClient
      .send<Profile[]>({ cmd: 'get_profiles' }, { ids: users.map((u) => u.id) })
      .toPromise();

    return users.map((u) => ({
      ...u,
      ...profiles.find((p) => p.userId === u.id),
    }));
  }
}
