import { Component } from '@angular/core';
import { faCircleDot, faCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list-projects',
  standalone: false,
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {

  faCircleDot = faCircleDot;
  faCircleRight = faCircleRight;

}
