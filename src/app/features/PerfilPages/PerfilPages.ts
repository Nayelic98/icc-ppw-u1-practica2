import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-perfil-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './PerfilPages.html',
  styleUrls: ['./PerfilPages.css']
})

export class PerfilPages{
 name = signal('Nayeli');
 lastname = signal('Barbecho');
 public age = signal(21);

 

 getfullName(): string{
  return `${this.name()} ${this.lastname()} con edad de ${this.age() } años`;
 }
 changeData(): void{
  this.name.set('María');
  this.lastname.set('González');
  this.age.set(25);
 }
  resetData(): void{
    this.name.set('Nayeli');
    this.lastname.set('Barbecho');
    this.age.set(21);
  }
  changeAge(): void{
    this.age.set(18);
  }
}
