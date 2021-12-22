import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionStoreService } from '@sections/session/services';
import { User } from '@shared/models';
import { StateStoreService } from '@core/services';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public isSubmitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private stateSS: StateStoreService,
    private sessionSS: SessionStoreService
  ) { }

  ngOnInit(): void {
    this.formatReactiveForm();
  }

  formatReactiveForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        email: ['']
      }
    );

    this.reactiveForm.patchValue(this.stateSS.session?.user);
  }

  submitForm() {
    this.isSubmitted = true;
    
    const user: User = this.reactiveForm.getRawValue();
    user._id = this.stateSS.session?.user?._id

    if (this.reactiveForm.valid) {
      this.sessionSS.changeEmail(user);
    } else {
      throw new Error('Form error');
    }
  }
  
}
