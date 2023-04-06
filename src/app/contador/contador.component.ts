import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numero: number = 1;  

  decrementar() {
    this.numero--;
  }

  incrementar () {
    this.numero++
  }

  // nombre: string = 'Baltasar'; // se pueden utilizar solo en las vistas del propio componente

  // persona: Persona  = {
  //   nombre: 'Baltasar',
  //   edad: 24,
  // }
}
