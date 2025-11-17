import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils/form-utils';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-more',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario-more.html',
  styleUrls: ['./formulario-more.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioMore {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Datos enviados:', this.myForm.value);
    alert('Formulario válido. Datos registrados correctamente.');
  }
}
