import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@shared/models';
import { SessionStoreService } from '@sections/session/services';
import { StateStoreService } from '@core/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public isSubmitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    public sessionSS: SessionStoreService,
    public stateSS: StateStoreService
  ) { }

  ngOnInit(): void {
    this.formatReactiveForm();
  }

  formatReactiveForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        name: [''],
        corporationName: [''],
        descriptionCorporate: [''],
        international: [false],
      }
    );

    this.reactiveForm.patchValue(this.stateSS.session.user);
  }

  submitForm() {
    this.isSubmitted = true;

    const user: User = this.reactiveForm.getRawValue();
    user._id = this.stateSS.session?.user._id

    if (this.reactiveForm.valid) {
      this.sessionSS.updateUserProfile(user);
    } else {
      throw new Error('Form error');
    }
  }
  
}
