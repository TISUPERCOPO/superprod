import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { MoldeService } from '../molde.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-molde-lista',
  templateUrl: './molde-lista.component.html',
  styleUrls: ['./molde-lista.component.css']
})
export class MoldeListaComponent implements OnInit {
  @ViewChild('tabela') table: Table;
  rowsPageTable: number[] = [10, 25, 50, 100, 200, 500]
  moldes = []
  cols: any[]
  messaPageReport = 'Mostrando {first} a {last} de {totalRecords} registros'
  items: MenuItem[]
  sinal = true
  valorTooltip = 'Inativos'

  constructor(
    private moldeService: MoldeService,
    private title: Title,
    private spinner: NgxSpinnerService,
  ) { }


  ngOnInit(): void {
    this.title.setTitle('Lista de Moldes')
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista();
        }
      }
    ]
    this.carregarMolde()

    this.cols = [
      { field: 'id', header: 'Código', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descrição', width: '150px', type: 'text', key: 2 },
      { field: 'status', header: 'Status', width: '150px', type: 'text', key: 3 },
      { field: 'datacadastro', header: 'Data Cadastro', width: '100px', data: true, format: `dd/MM/yyyy H:mm`, type: 'date', key: 4 },
    ]
  }





  carregarMolde() {
    this.spinner.show()
    this.moldeService.listarMolde().then((obj) => {
      this.spinner.hide()
      this.moldes = obj
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
    if (this.sinal === true) {
      this.valorTooltip = 'Ativos'
      this.sinal = false
    } else {
      this.valorTooltip = 'Inativos'
      this.sinal = true
    }
    this.moldeService.AlternarLista(valor)
    .then((obj) => {
      this.moldes = obj
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide();
      // this.erroHandler.handle(erro);
    })
  }

  refresh() {
    this.carregarMolde();
  }

  onClear() {
    this.table.clear();
  }

}
