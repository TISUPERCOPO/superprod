import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { MaquinaService } from '../maquina.service';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoldeService } from '../../molde/molde.service';

@Component({
  selector: 'app-maquinas-lista',
  templateUrl: './maquinas-lista.component.html',
  styleUrls: ['./maquinas-lista.component.css']
})
export class MaquinasListaComponent implements OnInit {
  @ViewChild('tabela') table: Table
  rowsPageTable: number[] = [10, 25, 50, 100, 200, 500]
  maquinas: []
  cols: any[]
  messaPageReport = 'Mostrando {first} a {last} de {totalRecords} registros'
  items: MenuItem[]
  sinal = true
  valorTooltip = 'Inativos'

  constructor(
    private maquinaService: MaquinaService,
    private title: Title,
    private spinner: NgxSpinnerService,
    private moldeService: MoldeService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Lista Maquinas')
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista()
        }
      }
    ]
    this.carregarMaquina()


    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descrição', width: '150px', type: 'text', key: 2 },
      { field: 'molde', header: 'Molde', width: '150px', type: 'text', key: 3 },
      { field: 'status', header: 'Status', width: '100px', type: 'text', key: 4 },
    ]
  }

  carregarMaquina() {
    this.moldeService.listarMolde()
    this.spinner.show()
    this.maquinaService.listarMaquina().then((obj) => {
      this.spinner.hide()
      this.maquinas = obj
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide();
      // this.erroHandler.handle(erro);
    })
  }

  AlternarLista() {
    this.spinner.show()
    const valor = this.sinal ? '/inativos' : '/'
    if(this.sinal === true) {
      this.valorTooltip = 'Ativos'
      this.sinal = false
    }else {
      this.valorTooltip = 'Inativos'
      this.sinal = true
    }
    this.maquinaService.AlternarLista(valor).then((obj) => {
      this.maquinas = obj
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide();
      // this.erroHandler.handle(erro);
    })
  }

  refresh() {
    this.carregarMaquina()
  }

  onClear() {
    this.table.clear()
  }



}
