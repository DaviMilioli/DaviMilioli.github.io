import { Injectable } from '@angular/core';

export interface Project {
  id?: number;
  name: string;
  plataform: string[];
  languages: string[];
  github: string;
  status: 'Em Desenvolvimento' | 'Finalizado';
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    { id: 1, name: 'Utilize Já', plataform: ['Mobile'], languages: ['Node', 'Angular'], github: 'https://github.com/davimilioli/UtilizeJa', status: 'Finalizado', year: 2024  },
    { id: 2, name: 'UnyCall', plataform: ['Front-End', 'Back-End'], languages: ['PHP', 'HTML', 'CSS', 'JavaScript'], github: 'https://github.com/davimilioli/unycall', status: 'Finalizado', year: 2023  },
    { id: 3, name: 'Fast Order API', plataform: ['Back-End'], languages: ['Node'], github: 'https://github.com/davimilioli/fast-order-api', status: 'Em Desenvolvimento', year: 2025 },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

}
