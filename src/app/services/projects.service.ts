import { Injectable } from '@angular/core';

export interface Project {
  id?: number;
  name: string;
  description: string;
  plataform: string[];
  languages: string[];
  features: string[];
  github: string;
  status: 'Em Desenvolvimento' | 'Finalizado';
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    { 
      id: 1,
      name: 'Utilize Já',
      description: 'O UtilizeJá é o seu assistente pessoal multifuncional, projetado para facilitar suas tarefas diárias de maneira rápida e eficiente. Com uma interface intuitiva e uma ampla gama de ferramentas, sendo um app indispensável para quem busca praticidade e conveniência no dia a dia.',
      plataform: ['Mobile'],
      languages: ['Node', 'Angular'],
      features: [
        "Opção de favoritar alguma ferramenta.",
        "Autenticação com Firebase.",
        "Conversor de PDF: Converta imagens em PDF.",
        "Consulta de CEP: Encontre endereços e informações detalhadas a partir de qualquer CEP no Brasil.",
        "Conversor de Unidades: Converta medidas de peso, volume, distância e muito mais.",
        "Bloco de Notas: Anote ideias, lembretes e listas de tarefas em um ambiente organizado e acessível.",
        "Calendário e Agenda: Mantenha seus compromissos e eventos sempre em dia.",
        "Lista de Tarefas: Crie, edite e gerencie suas tarefas diárias para manter sua produtividade em alta."
      ],
      github: 'https://github.com/davimilioli/UtilizeJa', 
      status: 'Finalizado',
      year: 2024
    },
    { 
      id: 2,
      name: 'UnyCall',
      description: '',
      plataform: ['Front-End', 'Back-End'],
      languages: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      features: [],
      github: 'https://github.com/davimilioli/unycall',
      status: 'Finalizado',
      year: 2023  
    },
    { 
      id: 3,
      name: 'Fast Order API',
      description: '',
      plataform: ['Back-End'],
      languages: ['Node'],
      features: [],
      github: 'https://github.com/davimilioli/fast-order-api',
      status: 'Em Desenvolvimento',
      year: 2025
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

}
