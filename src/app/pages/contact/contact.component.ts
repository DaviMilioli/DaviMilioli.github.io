import { Component } from '@angular/core';
import { faDotCircle, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormContactData } from '../../Types';
import { EmailJsService } from '../../services/email-js.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faDotCircle = faDotCircle;
  faEnvelope = faEnvelope;
  faCheckCircle = faCheckCircle;
  
  showLoading: boolean = false;
  showMessageResponse: boolean = false;
  messageResponse: string = '';
  errorMessage: boolean = false;

  constructor(private emailJsService: EmailJsService) {}

  async submit(event: FormContactData) {
    this.showLoading = true;

    try {
      const success = await this.emailJsService.sendEmail(event);
      
      if (success) {
        this.showLoading = false;
        this.showMessageResponse = true;
        this.messageResponse = 'Sua mensagem foi enviada, em breve entrarei em contato!';
      }

    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      this.errorMessage = true;
    } finally {
      this.showLoading = false;
    }
  }
}
