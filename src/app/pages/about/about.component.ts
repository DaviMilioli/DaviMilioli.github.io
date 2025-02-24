import { Component } from '@angular/core';
import { faCircleDot, faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faCircleDot = faCircleDot;
  faDotCircle = faDotCircle;
}
