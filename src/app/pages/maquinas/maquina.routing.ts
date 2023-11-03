import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaquinasListaComponent } from "./maquinas-lista/maquinas-lista.component";
import { MaquinasCadastroComponent } from "./maquinas-cadastro/maquinas-cadastro.component";

const routes:  Routes = [
  {
    path: '',
    component: MaquinasListaComponent
  },
  {
    path: 'novo',
    component: MaquinasCadastroComponent
  },
  {
    path: ':id',
    component: MaquinasCadastroComponent
  },
]


@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports:[
  RouterModule
]
})

export class MaquinaRouting {}
