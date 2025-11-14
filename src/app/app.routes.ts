import { Routes } from '@angular/router';
import { HomePages } from './features/HomePages/HomePages';
import { PerfilPages } from './features/PerfilPages/PerfilPages';
import { ProyectoPage } from './features/proyecto-page/proyecto-page';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';
import { FormularioPage } from './features/FormularioPage/FormularioPage';
export const routes: Routes = [
  { path: '', component: HomePages, title: 'Home' },
  { path: 'perfil', component: PerfilPages, title: 'PerfilPages' },
  { path: 'proyecto', component: ProyectoPage, title: 'Proyecto' },
  { path: 'proyectodos', component: ProyectosDosPage, title: 'ProyectoDosPage' },
  { path: 'formulario', component: FormularioPage, title: 'formulario' },
  { path: '**', redirectTo: '' }
];
