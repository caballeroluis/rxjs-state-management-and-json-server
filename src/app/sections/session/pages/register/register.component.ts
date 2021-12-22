import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionStoreService } from '@sections/session/services';
import { User } from '@shared/models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public isSubmitted = false;
  
  constructor(
    private sessionSS: SessionStoreService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formatReactiveForm();
  }

  formatReactiveForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        email: [''],
        password: [''],
        name: [''],
        corporationName: [''],
        descriptionCorporate: [''],
        international: [false],
        role: ['']
      }
    );
  }

  submitForm() {
    this.isSubmitted = true;

    const user: User = this.reactiveForm.getRawValue();

    if (this.reactiveForm.valid) {
      this.sessionSS.register(user);
    } else {
      throw new Error('Form error');
    }
  }

}

