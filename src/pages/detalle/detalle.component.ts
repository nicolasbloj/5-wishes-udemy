import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

import { Lista, ListaItem } from '../../app/classes';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

    lista: Lista[];
    index: number;

    constructor(
        private _navParams: NavParams,
        private _listaDeseosService: ListaDeseosService,
        private _navController: NavController,
        public alertCtrl: AlertController
    ) {

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
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Esta seguro que desea borrar la lista?',
            buttons: [
                {
                    text: 'Cancelar'/*,
                    handler: () => {
                        console.log('Disagree clicked');
                    }*/
                },
                {
                    text: 'Eliminar',
                    handler: () => {

                        this._listaDeseosService.eliminarLista(this.index);
                        this._navController.pop();

                    }
                }
            ]
        });
        confirm.present();
    }




}
