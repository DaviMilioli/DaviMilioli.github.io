import { Component, Input } from '@angular/core';
import { faCircleDot, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService} from '../../services/projects.service';
import { Project } from '../../Types';

@Component({
  selector: 'app-list-projects',
  standalone: false,
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {
  faCircleDot = faCircleDot;
  faCircleRight = faCircleRight;
  @Input() showProjects: number = 5;

  constructor(private projectService: ProjectsService){
    this.getProjects()
  }

  projects: Project[] = [];


  getProjects(){
    this.projects = this.projectService.getProjects();
  }

}
