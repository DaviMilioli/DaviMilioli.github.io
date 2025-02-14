import { Component } from '@angular/core';
import { faCircleDot, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-list-projects',
  standalone: false,
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent {
  faCircleDot = faCircleDot;
  faCircleRight = faCircleRight;

  constructor(private projectService: ProjectsService){
    this.getProjects()
  }

  projects: Project[] = [];


  getProjects(){
    this.projects = this.projectService.getProjects();
  }

}
