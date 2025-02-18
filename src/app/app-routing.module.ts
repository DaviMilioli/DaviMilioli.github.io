import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsDetailComponent } from './pages/projects-detail/projects-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'Sobre Mim'} 
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {title: 'Projetos'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {title: 'Contato'}
  },
  {
    path: 'projects/:id',
    component: ProjectsDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
