import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [    
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Calumon';
  nombreUpper: string = 'CALUMON';
  nombreCompleto: string = 'cAluMOn DigiEVoluVioNA';

  fecha: Date = new Date(); //el día de hoy

}
