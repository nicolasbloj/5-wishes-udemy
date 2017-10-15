import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

  constructor(public _listaDeseosSerivice: ListaDeseosService) {

  }

}
