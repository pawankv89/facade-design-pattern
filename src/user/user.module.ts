import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { UserState } from './+state/user.state';
import { UserService } from './user.service';
import { UserFacade } from './+state/user.facade';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([UserState])],
  providers: [UserService, UserFacade]
})
export class UserModule {}
