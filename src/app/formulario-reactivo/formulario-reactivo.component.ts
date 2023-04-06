import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {

  // Reglas de validación
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);


}
