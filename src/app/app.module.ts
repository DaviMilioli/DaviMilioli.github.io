import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsDetailComponent } from './pages/projects-detail/projects-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSkillsComponent } from './components/list-skills/list-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ListProjectsComponent,
    ContactComponent,
    ProjectsDetailComponent,
    PdfViewComponent,
    FormContactComponent,
    ListSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
