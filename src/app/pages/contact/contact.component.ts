import { Component } from '@angular/core';
import { faDotCircle, faCoffee, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faDotCircle = faDotCircle;
  faEnvelope = faEnvelope;
}
