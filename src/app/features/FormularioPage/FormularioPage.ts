import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './FormularioPage.html',
  styleUrl: './FormularioPage.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormularioPage { 
  onSubmitForm(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario', this.myForm.value);
    alert('Formulario enviado con éxito');
    this.myForm.reset();
  }

  isValidField(field:string):boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }
  getfieldError(fieldName:string):string | null {
    if(!this.myForm.controls[fieldName]){
      return null;
    }
    const errors = this.myForm.controls[fieldName].errors || {};
    for (const key of Object.keys(errors)){
      switch (key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        case 'email':
          return 'No es un correo válido';
      }
    }
    return null;
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
  private fb = inject(FormBuilder);
  myForm:FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    edad: [0,[Validators.required, Validators.min(18)]],
    correo: ['',[Validators.required, Validators.email]],
  });
}
