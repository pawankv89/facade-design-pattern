import { Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';

import { UserActions } from './user.actions';
import { UserService } from '../user.service';
import { tap, map } from 'rxjs/operators';

export interface UserModel {
    userDetails: any;
    albumDetails: any;
}

export const USER_STATE_TOKEN = new StateToken<UserModel>('users');

@State<UserModel>({
  name: USER_STATE_TOKEN,
  defaults: {
    userDetails: null,
    albumDetails: null
  }
})
@Injectable()
export class UserState {
  @Selector()
  static userDetails(state: UserModel) {
    return state.userDetails;
  }
  @Selector()
  static albumDetails(state: UserModel) {
    return state.albumDetails;
  }

  constructor(private userService: UserService) {}

  @Action(UserActions.GetUserDetails)
  getUserDetails(ctx: StateContext<UserModel>, action: UserActions.GetUserDetails) {
    return this.userService.getUsersList().pipe(
      tap((userDetails) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          userDetails
        });
      })
    );
  }

  @Action(UserActions.GetAlbumDetails)
  getAlbumDetails(ctx: StateContext<UserModel>, action: UserActions.GetAlbumDetails) {
    return this.userService.getAlbumsList().pipe(
      tap((albumDetails) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          albumDetails
        });
      })
    );
  }
}
