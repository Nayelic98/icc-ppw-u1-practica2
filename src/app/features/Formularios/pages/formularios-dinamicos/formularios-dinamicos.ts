import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils/form-utils';

@Component({
  selector: 'app-formularios-dinamicos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios-dinamicos.html',
  styleUrl: './formularios-dinamicos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos { 

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ])
  });

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, [Validators.required, Validators.minLength(3)])
    );

    this.newLenguaje.reset();
  }

 // Eliminar lenguaje
onDeleteLenguaje(index: number) {
  this.lenguajes.removeAt(index);
}

// Enviar
onSubmit() {
  this.myForm.markAllAsTouched();
  console.log(this.myForm.value);
}
}
