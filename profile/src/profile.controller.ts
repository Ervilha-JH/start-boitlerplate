import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern } from '@nestjs/microservices';
import { Profile } from './interfaces/profile-interface';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern({ cmd: 'get_profiles' })
  getProfiles(): Profile[] {
    return this.profileService.getProfiles();
  }
}
