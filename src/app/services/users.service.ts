import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }


  getUsers(start: number = 0) {
    const url = `${base_url}/users?start=${start}`;
    return this.http.get<any>(url)
      .pipe(
        map(
          resp => {

            const users = resp.users.map(
              user => new User(
                user.name, user.email, '',
                user.img, user.role, user.uid
              )
            );
            return {
              total: resp.total,
              users
            };
          }
        )
      );
  }
}
