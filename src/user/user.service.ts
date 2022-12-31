import { Injectable } from '@angular/core';
import { RemoteService } from './remote.service';

const USERS_BASE_URL = 'assets/users.json';
const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private remoteService: RemoteService) {}

  getUsersList() {
    return this.remoteService.get(USERS_BASE_URL);
  }

  getAlbumsList() {
    return this.remoteService.get(ALBUMS_BASE_URL);
  }
}
