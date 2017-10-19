import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Component } from '@angular/core';

import { ListaItem , Lista} from '../../app/classes/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

  nombre_lista = '';
  nombre_item = '';

  items: ListaItem[] = [];

  constructor(private _listaDeseosService: ListaDeseosService) {

  }


  agregarItem(): void {
    if (this.nombre_item.length === 0) {
      return; 
    }
    this.items.push({nombre: this.nombre_item, completado: false});
    this.nombre_item = '';
  }

  agregarLista(): void {
    if (this.nombre_lista.length === 0) {
      return; 
    }

    this._listaDeseosService.listas.push(new Lista(this.nombre_lista,this.items))
    
    this.items = [];
    this.nombre_lista = '';
  }
}