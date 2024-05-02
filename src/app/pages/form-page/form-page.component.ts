import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent {}
