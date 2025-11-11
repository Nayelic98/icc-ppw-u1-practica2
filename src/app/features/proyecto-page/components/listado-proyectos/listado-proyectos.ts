import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'listado-proyectos',
  imports: [],
  templateUrl: './listado-proyectos.html',
  styleUrl: './listado-proyectos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos {
  listName = input.required<string>();
  proyectos = input.required<Proyecto[]>();
 }
