import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faBars = faBars;

  toggled: Boolean;

  constructor() {
    this.toggled = false;
  }

  toggleSideBar(): void {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }
}
