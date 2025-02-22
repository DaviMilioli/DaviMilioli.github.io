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
      images: [
        { position: 1, imagePath: 'utilizeja/introducao.png', title: 'Introdução' },
        { position: 2, imagePath: 'utilizeja/login.png', title: 'Login' },
        { position: 3, imagePath: 'utilizeja/cadastro.png', title: 'Cadastro' },
        { position: 4, imagePath: 'utilizeja/tela-inicial.png', title: 'Tela Inicial' },
        { position: 5, imagePath: 'utilizeja/config-inicial.png', title: 'Configuração tela inicial' },
        { position: 6, imagePath: 'utilizeja/favoritos.png', title: 'Ferramentas Favoritas' },
        { position: 7, imagePath: 'utilizeja/conversor-pdf.png', title: 'Conversor de PDF' },
        { position: 8, imagePath: 'utilizeja/conversor-pdf-anexo.png', title: 'Conversor de PDF com Anexo' },
        { position: 9, imagePath: 'utilizeja/lista-afazeres.png', title: 'Lista de Afazeres' },
        { position: 10, imagePath: 'utilizeja/lista-afazeres-form.png', title: 'Lista de Afazeres Formulário' },
        { position: 11, imagePath: 'utilizeja/bloco-notas.png', title: 'Bloco de Notas' },
        { position: 12, imagePath: 'utilizeja/bloco-notas-form.png', title: 'Bloco de Notas Formulário' },
        { position: 13, imagePath: 'utilizeja/bloco-notas-anotacao.png', title: 'Bloco de Notas com Anotação' },
        { position: 14, imagePath: 'utilizeja/consulta-cep.png', title: 'Consulta de CEP' },
        { position: 15, imagePath: 'utilizeja/consulta-cep-preenchido.png', title: 'Consulta de CEP preenchido' },
      ],
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
    return this.projects.map(project => ({
      ...project,
      images: project.images ? project.images.sort((a, b) => a.position - b.position) : []
    }));
    
  }

  getProjectById(id: number): Project | null {
    const project = this.projects.find(project => project.id === id);
    if(project){
      return {
        ...project,
        images: project.images ? project.images.sort((a, b) => a.position - b.position) : []
      }
    }

    return null;
  }

}
