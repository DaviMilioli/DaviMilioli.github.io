import { Component } from '@angular/core';
import { faCircleDot, faPlusSquare, faCopy, faCheckCircle, faCircleRight, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faCircleDot = faCircleDot;
  faCopy = faCopy;
  faPlusSquare = faPlusSquare;
  faCheckCircle = faCheckCircle;
  faCircleRight = faCircleRight;
  faAddressBook = faAddressBook

  textCopy = 'Copiar E-mail';
  iconCopy = this.faCopy;
  isCopied = false;
  showProjects: number = 2;

  modal: boolean = false;

  copyEmail(){
    navigator.clipboard.writeText('davimilioli2108@gmail.com').then(() => {
      this.textCopy = 'Copiado';
      this.iconCopy = this.faCheckCircle;
      this.isCopied = true;

      setTimeout(() => {
        this.textCopy = 'Copiar E-mail';
        this.iconCopy = this.faCopy;
        this.isCopied = false;
      }, 2000)
    });
  }

  showModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }
}
