export class UserInterface {

  smallScreen: boolean;
  coreSidenavClosed: boolean;

  constructor() {
    this.smallScreen = window.innerWidth < 480;
    this.coreSidenavClosed = this.smallScreen;
  }

}
