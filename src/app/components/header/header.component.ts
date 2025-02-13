import { Component } from '@angular/core';
import { faHardDrive, faSquarePlus, faCircleUser, faCirclePlay, faMessage } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faHardDrive = faHardDrive;
  faPlusSquare = faSquarePlus;
  faCircleUser = faCircleUser;
  faCirclePlay = faCirclePlay;
  faMessage = faMessage

  constructor(private router: Router){}

  linkActive(route: string): boolean {
    return this.router.url == route;
  }

}
