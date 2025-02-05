import { Component } from '@angular/core';
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatAnchor,
    RouterLink,
    MatButton,
    MatIcon,
    MatIconButton,
    MatSuffix
  ],
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
