import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceTs {
  
  
  constructor() {
    effect(() => {
      //FUNCION = ()+>
      const data =this.proyectos();
      console.log(data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });
    
    
  }
  private readonly STORAGE_KEY = 'proyectosApp';
  proyectos =signal<Proyecto[]>(this.loadProyectos());
  proyectosDOS =signal<Proyecto[]>(this.loadProyectos());
  private loadProyectos(): Proyecto[]
  {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data):[{
    id: 1, nombre: 'Proyecto 1', 
    descripcion: 'Descripción del Proyecto 1',
  
    },];
  }
  //proyectos= signal<Proyecto[]>([
   // {id: 1, nombre: 'Proyecto 1', 
    //descripcion: 'Descripción del Proyecto 1'},
  //]);
  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }
 dellFirstproyecto() {
    this.proyectos.set(this.proyectos().slice(1));
    //for (let index=0; index < this.proyectos().length; index++) {
    //const elemnento= this.proyectos()[index];
    //if (elemnento.id === id) {
    //this.proyectos().splice(index,1);
    //}
    //}
  }
}
