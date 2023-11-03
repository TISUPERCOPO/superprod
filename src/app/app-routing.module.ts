import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'moldes',
    loadChildren: () => import('./pages/molde/molde.module').then(m => m.MoldeModule)
  },
  {
    path:'maquinas',
    loadChildren: () => import('./pages/maquinas/maquina.module').then(m => m.MaquinaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
