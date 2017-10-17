import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform{
transform(value: string, valorPorDefecto: string ): string{
    return value ? value : valorPorDefecto ;
}
}