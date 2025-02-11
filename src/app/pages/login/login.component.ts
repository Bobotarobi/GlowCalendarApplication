import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';


@Component({
  selector: 'app-login',
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    MatIcon,
    MatIconButton,
    MatButton,
    MatCheckbox,
    MatAnchor,
    MatSuffix,
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  hidePassword: boolean = true;

  clickEvent() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {

  }
}
