import { Pipe, PipeTransform } from '@angular/core';

import { Lista } from '../classes';

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {

    transform(listas: Lista[], pendiente: boolean): Lista[] {
        let listas_pendientesOcompletados: Lista[] = [];

        for (let lista of listas) {
            if (pendiente) {
                if (!this.listaEstaCompletada(lista)) {
                    listas_pendientesOcompletados.push(lista);
                }
            }else{
                if (this.listaEstaCompletada(lista)) {
                    listas_pendientesOcompletados.push(lista);
                }
            } 
        }
        return listas_pendientesOcompletados;
    }

    listaEstaCompletada(lista: Lista): boolean {
        for (let item of lista.items) {
            if (!item.completado)
                return false;
        }
        return true;
    }

}
