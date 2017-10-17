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

}
