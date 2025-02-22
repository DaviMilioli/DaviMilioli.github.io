export interface Project {
  id?: number;
  name: string;
  description: string;
  images?: { position: number; imagePath: string; title: string }[]; 
  plataform: string[];
  languages: string[];
  features: string[];
  github: string;
  status: 'Em Desenvolvimento' | 'Finalizado';
  year: number;
}

export interface FormContactData {
  name: string;
  telephone: number;
  email: string;
  message: string;
}