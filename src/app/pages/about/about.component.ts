import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faDotCircle = faDotCircle
}
