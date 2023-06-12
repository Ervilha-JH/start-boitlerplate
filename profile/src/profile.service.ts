import { Injectable } from '@nestjs/common';
import { Profile } from './interfaces/profile-interface';

@Injectable()
export class ProfileService {
  getProfiles(): Profile[] {
    return [
      { id: 1, profile: 'Admin', userId: 1 },
      { id: 2, profile: 'Empresa', userId: 2 },
    ];
  }
}
