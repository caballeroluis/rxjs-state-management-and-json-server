import { Component } from '@angular/core';
import { StateStoreService } from '@core/services';
import { environment } from '@env/environment';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  env = environment;

  constructor(
    public stateSS: StateStoreService
  ) { }

  sidenavToggle() {
    this.stateSS.userInterface.coreSidenavClosed = !this.stateSS.userInterface.coreSidenavClosed;
  }

  printState() {
    console.log('--------------- 📂 STATE 👀 ---------------');
    console.log('📱 UserInterface:');
    console.log('UserInterface data', this.stateSS.userInterface);
    console.log('UserInterace observers', this.stateSS.userInterface$['source']);
    console.log('🔐 Session:');
    console.log('Session data', this.stateSS.session);
    console.log('Session observers', this.stateSS.session$['source']);
    console.log('🧑‍💻 Users:');
    console.log('Users data', this.stateSS.users);
    console.log('Users observers', this.stateSS.users$['source']);
    console.log('💼 Offers:');
    console.log('Offers data', this.stateSS.offers);
    console.log('Offers observers', this.stateSS.offers$['source']);
  }

}
