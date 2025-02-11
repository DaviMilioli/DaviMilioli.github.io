import { Component } from '@angular/core';
import { faCircleDot, faPlusSquare, faCopy, faCheckCircle, faCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faDotCircle = faCircleDot;
  faCopy = faCopy;
  faPlusSquare = faPlusSquare;
  faCheckCircle = faCheckCircle;
  faCircleRight = faCircleRight;

  textCopy = 'Copiar E-mail';
  iconCopy = this.faCopy;
  isCopied = false;

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
}
