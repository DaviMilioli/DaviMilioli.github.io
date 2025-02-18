import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-detail',
  standalone: false,
  templateUrl: './projects-detail.component.html',
  styleUrl: './projects-detail.component.scss'
})
export class ProjectsDetailComponent implements OnInit{
  project!: Project;
  faDotCircle = faDotCircle;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService, private title: Title) {}

  ngOnInit(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.project = this.projectService.getProjectById(id) ?? {} as Project;
    
    this.title.setTitle(`Davi Milioli - Projeto ${this.project.name}`);

    console.log(this.project)
  }

}
