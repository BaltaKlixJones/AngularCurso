import { Component } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
personas: Persona[] = [
  {nombre: 'Juan', edad: 23},
  {nombre: 'Ana', edad: 18},
  {nombre: 'Pedro', edad: 20},
  {nombre: 'Luis', edad: 45},
  
  ]
}
