import { Component } from '@angular/core';
import { faHardDrive, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faHardDrive = faHardDrive
  faPlusSquare = faSquarePlus

}
