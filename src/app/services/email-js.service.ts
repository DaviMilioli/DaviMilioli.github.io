import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormContactData } from '../Types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {

  constructor() {
    emailjs.init(environment.keyEmail);
  }

  async sendEmail(data: FormContactData): Promise<boolean> {
    try {

      await emailjs.send("service_wac5ivm", "template_9dz5rnc", {
        from_name: data.name,
        from_tel: data.telephone,
        from_email: data.email,
        message: data.message,
      });

      return true;
    } catch (error) {
      console.error('Erro ao enviar-email', error);
      return false;
    }
  }
}
