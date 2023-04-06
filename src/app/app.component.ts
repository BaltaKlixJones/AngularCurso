import { Component } from '@angular/core'; // importar un decorador

@Component({
  selector: 'app-root', // a traves de este selector se lo llama en el index.html
   templateUrl: './app.component.html', // template en otro archivo
  styleUrls: ['./app.component.css'] // estilos css en otro archivo

   // template: ` <h1>Curso Angular</h1> `, // para definir directamente el template en esta pagina
  // styles: [
  //   `
  //     /* estilo css en el mismo template */
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'Curso Angular';
}
