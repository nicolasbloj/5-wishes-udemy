import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

    lista: Lista[];
    index: number;
    constructor(private _navParams: NavParams,
        private _listaDeseosService: ListaDeseosService,
        private _navController: NavController) {

    }

    public ngOnInit(): void {
        console.log('parametro recibido');
        console.log(this._navParams.get('param_lista'));
        this.lista = this._navParams.get('param_lista');
        this.index = this._navParams.get('idx');
    }

    actualizar(item: ListaItem): void {

        item.completado = !item.completado;
        this._listaDeseosService.saveLista();

    }

    eliminarLista(): void {
        this._listaDeseosService.eliminarLista(this.index);
        this._navController.pop();
    }
}
