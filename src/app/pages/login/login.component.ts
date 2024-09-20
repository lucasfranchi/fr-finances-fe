import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FrCheckboxComponent } from '../../components/checkbox/checkbox.component';
import { FrInputTextComponent } from '../../components/inputs/input-text/input-text.component';
import { FrButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FrInputTextComponent,
    ReactiveFormsModule,
    FrCheckboxComponent,
    FrButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  fb: FormBuilder = new FormBuilder();
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this._createFormGroup();
  }

  private _createFormGroup() {
    return this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      password: [],
    });
  }
}
