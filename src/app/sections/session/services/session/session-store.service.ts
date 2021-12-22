import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/models';
import { SessionService } from '@sections/session/services';
import { Session } from '@sections/session/models';
import { StateStoreService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private stateSS: StateStoreService
  ) { }

  register(user: User) {
    this.sessionService.register(user).subscribe(
      (response: User) => {
        this.stateSS.users = [
          ...this.stateSS.users,
          response as User
        ];
        
        // this.router.navigate(['session', 'profile']);
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  login(user: User) {
    this.sessionService.login(user).subscribe(
      (response: Session) => {
        this.stateSS.clear();
        if (response.token?.length > 0) {
          this.stateSS.session = response as Session;
          
          this.router.navigate(['board']);
        }
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

  updateUserProfile(user: User) {
    this.sessionService.updateUserProfile(user).subscribe(
      (response: User) => {
        this.stateSS.session.user = response as User;

        this.stateSS.users[
          this.stateSS.users.findIndex(_user => _user._id == user._id)
        ] = user;
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }
  
  changePassword(user: User) {
    this.sessionService.changePassword(user).subscribe(
      (response: User) => {
        this.stateSS.session.user = response as User;
        
        this.stateSS.users[
          this.stateSS.users.findIndex(_user => _user._id == user._id)
        ] = user;
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }
  
  changeEmail(user: User) {
    this.sessionService.changeEmail(user).subscribe(
      (response: User) => {
        this.stateSS.session.user = response as User;

        this.stateSS.users[
          this.stateSS.users.findIndex(_user => _user._id == user._id)
        ] = user;
      },
      (error: any) => {
        throw new Error(error);
      }
    );
  }

}
