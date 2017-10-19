import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/classes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

  constructor(public _listaDeseosSerivice: ListaDeseosService,
    private _navController: NavController) {

  }

  irAgregar(): void {
    this._navController.push(AgregarComponent)
  }

  detallarLista(lista: Lista, idx: number): void {

    this._navController.push(DetalleComponent, {
      param_lista: lista,
      idx:idx
    });

    // en emacscript 6 es redundante el nombre de los parametros tomando como 
    // nombre el mismo nombre de la variable : 

    /*this._navController.push(DetalleComponent, {
      lista
    });*/

    // entonces despues con navParams.get('lista') obtenemos el valor.
  }
}
