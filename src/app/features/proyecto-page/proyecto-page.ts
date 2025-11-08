import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyecto-page',
  imports: [],
  templateUrl: './proyecto-page.html',
  styleUrl: './proyecto-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoPage {

  name = signal('');
  description= signal('');
  proyectos= signal<Proyecto[]>([
    {id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del Proyecto 1'},
  ]);
changeName(value: string){
  this.name.set(value);
}
changeDescription(value: string){
  this.description.set(value);
}
addProyecto(){
  const newProyecto: Proyecto = {
    id: this.proyectos().length + 1,
    nombre: this.name(),
    descripcion: this.description()
  };
  this.proyectos.set([...this.proyectos(), newProyecto]);
  this.name.set('');
  this.description.set('');
}

}
