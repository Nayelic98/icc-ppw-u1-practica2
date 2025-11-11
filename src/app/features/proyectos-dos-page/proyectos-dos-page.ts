import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosServiceTs } from './services/proyectos-service.ts';
import { ListadoProyectos } from "../proyecto-page/components/listado-proyectos/listado-proyectos";
import { AddProyecto } from '../proyecto-page/components/listado-proyectos/add-proyecto/add-proyecto.js';

@Component({
  selector: 'app-proyectos-dos-page',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectos-dos-page.html',
  styleUrl: './proyectos-dos-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDosPage {
  proyectosService= inject(ProyectosServiceTs);
 }
