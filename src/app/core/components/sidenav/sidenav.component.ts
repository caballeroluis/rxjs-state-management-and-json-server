import { Component, OnInit } from '@angular/core';
import { StateStoreService } from '@core/services';

@Component({
  selector: 'core-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  constructor(
    public stateSS: StateStoreService
  ) { }

  ngOnInit(): void {
  }
  
  sidenavToggle() {
    this.stateSS.userInterface.coreSidenavClosed = !this.stateSS.userInterface.coreSidenavClosed;
  }

}
