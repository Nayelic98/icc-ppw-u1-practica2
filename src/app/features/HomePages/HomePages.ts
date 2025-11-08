import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './HomePages.html',
  styleUrls: ['./HomePages.css']
})

export class HomePages
{
  title = 'Primer Componente';
  subtitle = 'Mi primera Practica';

  contador = 0;
  private intervalo: any;

  incrementar(): void
  {
    this.contador++;
  }
 iniciarIncrementoAutomatico(): void {
    this.intervalo = setInterval(() => {
      this.incrementar();
    }, 1000); // cada 1 segundo
  }
  decrementar(): void
  {
    this.contador--;
  }

  reset(): void
  {
    this.contador = 0;
  }
}
