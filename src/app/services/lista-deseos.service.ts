import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

    public listas: Lista[] = [];

    constructor() {
        this.loaddLista();
        console.log('servicio inicializado');
    }

    agregarLista(lista: Lista): void {
        this.listas.push(lista);
        this.saveLista();
    }
    
    eliminarLista(index: number): void {
        this.listas.splice(index, 1);
        this.saveLista();
    }
    saveLista(): void {
        localStorage.setItem("listas", JSON.stringify(this.listas));
    }

    loaddLista(): void {
        if (localStorage.getItem("listas")) {
            this.listas = JSON.parse(localStorage.getItem("listas"));
        }
    }
}