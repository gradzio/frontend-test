import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

export const MOCK_USER: User = {
  id: 'abcd1234',
  firstName: 'Morten',
  lastName: 'Danielsson',
  organization: {
    id: 'zxc098',
    name: 'HairStylist',
    url: 'hairstylist.com',
  },
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public getUser(): Observable<User> {
    // normally we'd make either a call to the API or we'd get this data from the session.
    return of(MOCK_USER);
  }
}
