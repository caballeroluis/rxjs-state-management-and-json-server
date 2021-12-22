import { Component } from '@angular/core';
import { User } from '@shared/models';
import { StateStoreService } from '@core/services';
import { UserStoreService } from '@shared/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private userSS: UserStoreService,
    public stateSS: StateStoreService
  ) { }

  ngAfterViewInit() {
    if (
      (!this.stateSS.users || this.stateSS.users.length === 0)
    ) {
      this.userSS.getUsers();
    }
  }

  getIdTrackFn = (i: number, item: any) => item._id;

  getUsers() {
    this.userSS.getUsers();
  }

  deleteUser(user: User) {
    this.userSS.deleteUser(user);
  }

}
