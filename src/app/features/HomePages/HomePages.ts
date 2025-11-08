import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './HomePages.html',
  styleUrls: ['./HomePages.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePages implements OnInit, OnDestroy {
  // contador normal (manual)
  counter = 0;

  // signal para contador automático
  conterSignal = signal(0);

  private intervalo: any; // guardar referencia para limpiar

  ngOnInit(): void {
    // arrancar el contador automático al iniciar el componente
    this.intervalo = setInterval(() => {
      console.log('tick'); // comprueba que realmente se está ejecutando
      this.conterSignal.update(v => v + 1);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  // métodos manuales
  changeValue(value: number) {
    this.counter += value;
    // si quieres que la señal también refleje manualmente:
    this.conterSignal.update(current => current + value);
  }

  resetValue(value: number) {
    this.counter = value;
    this.conterSignal.set(value);
  }
}
