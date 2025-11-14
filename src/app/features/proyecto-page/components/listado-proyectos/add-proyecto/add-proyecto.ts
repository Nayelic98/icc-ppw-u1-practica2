import { ChangeDetectionStrategy, Component, output,signal} from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  styleUrl: './add-proyecto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  name = signal('');
  description= signal('');
  newProyecto= output<Proyecto>();
  removeProyecto= output<number>();
 
  addProyecto(){
    const newProyecto: Proyecto = {
      id:Math.floor (Math.random()*100),
      nombre: this.name(),
      descripcion: this.description()
    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }
  changeName(value: string){
  this.name.set(value);
}
dellFirstproyecto(id:number){
  this.removeProyecto.emit(id);
}
changeDescription(value: string){
  this.description.set(value);
}
 }
