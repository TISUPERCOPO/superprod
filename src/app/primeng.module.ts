import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from "@angular/forms";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from "@angular/common";
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
exports:[
  CommonModule,
  FormsModule,
  ButtonModule,
  CardModule,
  TooltipModule,
  InputTextModule,
  InputSwitchModule,
  ProgressSpinnerModule,
  MessagesModule,
  ToastModule,
  SplitButtonModule,
  TableModule,
  DropdownModule

]

})

export class PrimeNgModule {}
