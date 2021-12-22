import { Component } from '@angular/core';
import { StateStoreService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public stateSS: StateStoreService
  ) { }

}
