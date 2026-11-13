import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormArray} from '@angular/forms';



@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-component',
  styleUrl: './formulario-component.css',
  templateUrl: './formulario-component.html',
})
export class FormularioComponent {

  reactiveForm = new FormGroup({
    nombre : new FormControl([
      Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)
    ]),
    apellidos : new FormControl([
      Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern( /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)
    ]),

    telefonoCont : new FormControl([
      Validators.required,Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)
    ]),

    email : new FormControl([
      Validators.email,Validators.required
    ]),

    nombreMascota : new FormControl([
      Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern( /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)
    ]),

    especie : new FormControl([
      Validators.required
    ]),

    sexo : new FormControl([
      Validators.required
    ]),

    raza : new FormControl([
      Validators.maxLength(40)
    ]),

    edad : new FormControl([
      Validators.required,Validators.min(0),Validators.max(30)
    ]),

    peso : new FormControl([
      Validators.required,Validators.min(0.1),Validators.max(90)
    ]),

    numeroMicroChip : new FormControl([
      Validators.required,Validators.pattern(/^\d{15}$/)
    ]),

    contrasenia : new FormControl([
      Validators.required,Validators.minLength(10),Validators.maxLength(24),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)
    ]),

    motivoVisita : new FormControl([
      Validators.required, Validators.minLength(10),Validators.maxLength(300)
    ]),

    politicaPrivacidad : new FormControl([
      Validators.requiredTrue
    ]),

    recordatorios : new FormControl
  })

  onSubmit() {
 
  console.warn(this.reactiveForm.value);
}

get field(field: field) {
  return this.reactiveForm.get(field) as FormArray;
}

isInvalidField(field: string) {
  const c = this.reactiveForm.get(field);
  return !!c && c.invalid && (c.dirty || c.touched);
}

hasError(field: string, error: string) {
  return this.reactiveForm.get(field)?.hasError(error);
}

}
