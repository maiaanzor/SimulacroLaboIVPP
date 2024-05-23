import { Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';

export const routes: Routes = [
    {
        path:'', component:BusquedaComponent
      },
      {
        path:'actorAlta', component:ActorAltaComponent
      },
      {
        path:'busqueda',component:BusquedaComponent
      }
];
