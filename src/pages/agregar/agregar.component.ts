import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { ListaItem, Lista } from '../../app/classes/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

  nombre_lista = '';
  nombre_item = '';

  items: ListaItem[] = [];

  constructor(private _listaDeseosService: ListaDeseosService,
    private _navController: NavController,
    public _alertCtrl: AlertController) {

  }


  agregarItem(): void {
    if (this.nombre_item.length === 0) {

      let alert = this._alertCtrl.create({
        title: 'Nombre de item',
        subTitle: 'El nombre del item es obligatorio',
        buttons: ['OK']
      });
      alert.present();

      return;
    }
    this.items.push({ nombre: this.nombre_item, completado: false });
    this.nombre_item = '';
  }

  eliminarItem(index: number): void {
    this.items.splice(index, 1);
  }

  agregarLista(): void {
    if (this.nombre_lista.length === 0) {

      let alert = this._alertCtrl.create({
        title: 'Nombre de lista',
        subTitle: 'El nombre de la lista es obligatorio',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    this._listaDeseosService.agregarLista(new Lista(this.nombre_lista, this.items));
    
    // this._navController.push(PendientesComponent)

    // regresamos a pantalla principal de la aplicacion

    this._navController.pop();

  }
}