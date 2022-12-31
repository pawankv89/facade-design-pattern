import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, interval } from 'rxjs';

import { UserState, UserModel } from './user.state';
import { UserActions } from './user.actions';

@Injectable()
export class UserFacade {
  @Select(UserState) userState$!: Observable<UserModel>;
  @Select(UserState.userDetails) userDetails$!: Observable<any>;
  @Select(UserState.albumDetails) albumDetails$!: Observable<any>;

  constructor(private store: Store) {}

  getUserDetails() {
    this.store.dispatch(UserActions.GetUserDetails);
  }

  getAlbumDetails() {
    this.store.dispatch(UserActions.GetAlbumDetails);
  }

  load() {
    this.getUserDetails();
    this.getAlbumDetails();
  }
}
