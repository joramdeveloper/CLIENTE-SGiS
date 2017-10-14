import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuard } from '../../auth-guard.service';


const routes: Routes = [
  { path: 'catalogos/grupo-cie10', redirectTo: '/catalogos/grupo-cie10/lista', pathMatch: 'full' },
  {
    path: 'catalogos/grupo-cie10',
    children: [
       { path: 'lista', component: ListaComponent},
       { path: 'nuevo', component: FormularioComponent },
       { path: 'editar/:id', component: FormularioComponent},
    ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GruposCie10RoutingModule { }
