import { Routes } from '@angular/router';

import { FormularioPage } from '../FormularioPage/FormularioPage';
import { FormulariosDinamicos } from './pages/formularios-dinamicos/formularios-dinamicos';
import { FormularioMore } from './pages/formulario-more/formulario-more';


export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formulario Básico',
        component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formulario Dinámico',
        component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'Formulario Más',
        component: FormularioMore,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
