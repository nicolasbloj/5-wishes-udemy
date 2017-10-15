import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

    public listas: Lista[] = [];

    constructor() {
    
        let lista1 = new Lista('Compras de supermercados');
        let lista2 =  new Lista('Juevos de mesa');
        let lista3 = new Lista('Cosas de univerdidad');
        
        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);

        console.log('servicio inicializado');

        }
}