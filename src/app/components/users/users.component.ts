import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles:[]
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public totalUsers: any;
  private usersTemp: User[];

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.getUsers(0).subscribe(
      ({total, users}) => {
        if (users.length !== 0) {
          this.totalUsers = total;
          this.users = users;
          this.usersTemp = users;
        }

      }
    );

  }



}
