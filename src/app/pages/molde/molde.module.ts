import { NgModule } from "@angular/core";
import { MoldeCadastroComponent } from "./molde-cadastro/molde-cadastro.component";
import { MoldeListaComponent } from "./molde-lista/molde-lista.component";
import { PrimeNgModule } from "src/app/primeng.module";
import { MoldeRouting } from "./molde.routing";
import { SharedModule } from "primeng/api";
import { CommonModule } from "@angular/common";
import { MessagesModule } from "primeng/messages";




@NgModule({
declarations:[
  MoldeListaComponent,
  MoldeCadastroComponent

],
imports: [
  PrimeNgModule,
  MoldeRouting,
  SharedModule,
],
exports:[]

})

export class MoldeModule {}
