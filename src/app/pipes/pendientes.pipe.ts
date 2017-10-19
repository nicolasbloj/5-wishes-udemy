import { Pipe, PipeTransform } from '@angular/core';

import { Lista } from '../classes';

@Pipe({
    name: 'pendientes'
})
export class PendientesPipe implements PipeTransform {

    transform(listas: Lista[], args:any): Lista[] {
        let listas_pendientes: Lista[] = [];

        for (let lista of listas) {
            if (this.listaEstaCompletada(lista)) {
                listas_pendientes.push(lista);
            }
        }
        return listas_pendientes;
    }

    listaEstaCompletada(lista: Lista): boolean {
        for (let item of lista.items) {
            if (!item.completado)
                return false;
        }
        return true;
    }

}