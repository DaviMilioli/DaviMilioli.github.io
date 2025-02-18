import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface FormConctactData {
  name: string;
  telephone: number;
  email: string;
  message: string;
}

@Component({
  selector: 'app-form-contact',
  standalone: false,
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
  @Output() onSubmit = new EventEmitter<FormConctactData>();
  formContact!: FormGroup;
  formContactData: FormConctactData | null = null;
/*   regexTelephone = /^\(\d{2}\)\s9\d{4}-\d{4}$/; */

  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]], 
      telephone: ['', [Validators.required, Validators.minLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  maskTel(event: any): void {
    let input = event.target.value;
    input = input.replace(/\D/g, "");

    if (input.length <= 2) {
      input = input.replace(/^(\d{2})/, "($1)");
    } else if (input.length <= 5) {
      input = input.replace(/^(\d{2})(\d{1})/, "($1) $2");
    } else if (input.length <= 10) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})/, "($1) $2$3-");
    } else {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");
    }

    event.target.value = input;
  }

  get name(){
    return this.formContact.get('name');
  }

  get telephone(){
    return this.formContact.get('telephone');
  }

  get email() {
    return this.formContact.get('email');
  }

  get message(){
    return this.formContact.get('message');
  }

  submit(){
    console.log('apertei')
    if(this.formContact.invalid){
      return;
    }

    console.log(this.formContact.value)

    /* this.onSubmit.emit(this.formContact.value) */
  }

}
