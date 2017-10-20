
import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { CompletadosComponent } from '../completados/completados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = CompletadosComponent;
  

  constructor() {

  }
}
