import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/classes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-completados',
  templateUrl: 'completados.component.html'
})
export class CompletadosComponent {

  constructor(public _listaDeseosSerivice: ListaDeseosService,
    private _navController: NavController) {

  }

  detallarLista(lista: Lista, idx: number): void {

    this._navController.push(DetalleComponent, {
      param_lista: lista,
      idx:idx
    });
  }
}
