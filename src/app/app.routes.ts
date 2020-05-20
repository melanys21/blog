import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: HeroesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog/:id',
    component: HeroeComponent,
  },
  {
    path: 'buscar/:termino',
    component: BuscarComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
