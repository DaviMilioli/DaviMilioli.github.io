import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
faDotCircle = faDotCircle
}
