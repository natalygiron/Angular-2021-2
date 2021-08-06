import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Wanda','Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarUltimo (){
    this.heroeBorrado = this.heroes.pop()?.toString() || '';
  }


}
