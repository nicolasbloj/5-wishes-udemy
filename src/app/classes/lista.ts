import { ListaItem } from './lista-item';

export class Lista {
    nombre: string;
    terminada: boolean;
    items: ListaItem[];

    constructor (nombre:string);

    constructor (nombre:string,items?:ListaItem[]);

    constructor(nombre: string, items?:ListaItem[]) {
        this.nombre = nombre;
        this.terminada = false;
        this.items = items;
    }
}