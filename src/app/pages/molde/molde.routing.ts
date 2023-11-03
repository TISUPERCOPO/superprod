import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MoldeListaComponent } from "./molde-lista/molde-lista.component";
import { MoldeCadastroComponent } from "./molde-cadastro/molde-cadastro.component";

const routes: Routes = [
  {
    path: '',
    component: MoldeListaComponent
  },
  {
    path: 'novo',
    component: MoldeCadastroComponent
  },
  {
    path: ':id',
    component: MoldeCadastroComponent
  }
]


@NgModule({
imports:[
  RouterModule.forChild(routes)
],
exports:[
  RouterModule
]
})


export class MoldeRouting {}
