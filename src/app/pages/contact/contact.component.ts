import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faDotCircle = faDotCircle;
}
