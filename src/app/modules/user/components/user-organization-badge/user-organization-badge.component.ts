import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-organization-badge',
  templateUrl: './user-organization-badge.component.html',
  styleUrls: ['./user-organization-badge.component.scss'],
})
export class UserOrganizationBadgeComponent implements OnInit {
  public user$: Observable<User>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
