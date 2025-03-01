import { Component } from '@angular/core';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-skills',
  standalone: false,
  templateUrl: './list-skills.component.html',
  styleUrl: './list-skills.component.scss'
})
export class ListSkillsComponent {
  faCircleDot = faCircleDot;

  skills = [
    {
      name: 'JavaScript',
      image: 'javascript'
    },
    {
      name: 'Angular',
      image: 'angular'
    },
    {
      name: 'TypeScript',
      image: 'typescript'
    },
    {
      name: 'Node',
      image: 'node'
    },
    {
      name: 'Git',
      image: 'git'
    },
    {
      name: 'Php',
      image: 'php'
    },
    {
      name: 'Sass',
      image: 'sass'
    },
    {
      name: 'jQuery',
      image: 'jquery'
    },
    {
      name: 'Bootstrap',
      image: 'bootstrap'
    },
    {
      name: 'MySQL',
      image: 'mysql'
    },
  ]
}
