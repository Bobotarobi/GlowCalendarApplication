import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfirmRegisterComponent} from "./pages/confirm-register/confirm-register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfirmRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'glowcalendar';
}
