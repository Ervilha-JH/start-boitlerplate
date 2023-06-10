import { Injectable } from '@nestjs/common';
import { Account } from './interfaces/account-interface';

@Injectable()
export class AppService {
  getAccounts(): Account[] {
    return [
      { id: 1, name: 'bob', userId: 1 },
      { id: 2, name: 'john', userId: 2 },
    ];
  }
}
