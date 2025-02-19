import { Injectable } from '@angular/core';
import { Project } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    { 
      id: 1,
      name: 'Utilize Já',
      description: 'O UtilizeJá foi um projeto desenvolvido durante meus estudos em Aplicativos Mobile, com o objetivo de criar um assistente pessoal multifuncional. O aplicativo foi projetado para otimizar e facilitar tarefas diárias, oferecendo uma interface intuitiva e diversas ferramentas. Durante o desenvolvimento, utilizei APIs e uma biblioteca para converter imagens em PDF.',
      plataform: ['Mobile'],
      languages: ['Angular', 'Ionic'],
      features: [
        "Opção de favoritar alguma ferramenta.",
        "Autenticação com Firebase.",
        "Conversor de PDF",
        "Consulta de CEP",
        "Conversor de Unidades",
        "Bloco de Notas",
        "Calendário e Agenda",
        "Lista de Tarefas"
      ],
      github: 'https://github.com/davimilioli/UtilizeJa', 
      status: 'Finalizado',
      year: 2024
    },
    { 
      id: 2,
      name: 'UnyCall',
      description: 'A Unycall foi um projeto desenvolvido durante o período de estudos em Back-End, com o objetivo de simular uma empresa do setor de telecomunicações. O sistema foi projetado para oferecer uma ampla gama de serviços de comunicação, garantindo conectividade eficiente para indivíduos e empresas. Durante o desenvolvimento, utilizei APIs de CEP para cadastro de usuário.',
      plataform: ['Front-End', 'Back-End'],
      languages: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySql'],
      features: [
        'Cadastro de Usuários',
        'Lista de Usuários',
        'Cadastro de Assinaturas',
        'Autenticação de Usuários',
        'Autenticação de 2 fatores',
        'Informações de conta',
        'Sistema de Pagamento',
        'Sistema de Assinatura'
      ],
      github: 'https://github.com/davimilioli/unycall',
      status: 'Finalizado',
      year: 2023  
    },
    { 
      id: 3,
      name: 'Fast Order API',
      description: 'O Fast Order API é um sistema de pedidos para delivery, desenvolvido como um projeto pessoal com o objetivo de criar uma solução prática e eficiente para o gerenciamento de pedidos de delivery. Esse projeto ainda está em fase de desenvolvimento',
      plataform: ['Back-End'],
      languages: ['Node', 'TypeScript'],
      features: ['Autenticação', 'Gerenciamento de Produtos'],
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
