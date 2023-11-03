import { NgModule } from "@angular/core";
import { MaquinasCadastroComponent } from "./maquinas-cadastro/maquinas-cadastro.component";
import { MaquinasListaComponent } from "./maquinas-lista/maquinas-lista.component";
import { PrimeNgModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MaquinaRouting } from "./maquina.routing";






@NgModule({
declarations: [
  MaquinasCadastroComponent,
  MaquinasListaComponent
],
imports: [
  PrimeNgModule,
  MaquinaRouting,
  SharedModule

],
exports: []
})

export class MaquinaModule {}
