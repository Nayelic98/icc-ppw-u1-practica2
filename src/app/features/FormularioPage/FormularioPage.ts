import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from '../../utils/form-utils/form-utils';

@Component({
  selector: 'app-formulario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './FormularioPage.html',
  styleUrl: './FormularioPage.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormularioPage {
  
  formUtils = FormUtils; 


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario:', this.myForm.value);
    alert('Formulario válido. Datos enviados correctamente.');
    this.myForm.reset();
  }

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });
}