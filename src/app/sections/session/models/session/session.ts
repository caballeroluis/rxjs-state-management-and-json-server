import { User } from '@shared/models';

export class Session {
  
  user: User;
  token: string;

  constructor() {
    this.user = new User();
    this.token = '';
  }
  
}
