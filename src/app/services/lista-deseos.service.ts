import { ListaItem } from '../classes/lista-item';
import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

    public listas: Lista[] = [];

    constructor() {
        console.log('servicio inicializado');
        }
}