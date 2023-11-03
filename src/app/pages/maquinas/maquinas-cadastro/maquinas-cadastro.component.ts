import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maquina } from 'src/app/core/module/maquina.modul';
import { Molde } from 'src/app/core/module/molde.modul';
import { MoldeService } from '../../molde/molde.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { MaquinaService } from '../maquina.service';

@Component({
  selector: 'app-maquinas-cadastro',
  templateUrl: './maquinas-cadastro.component.html',
  styleUrls: ['./maquinas-cadastro.component.css']
})
export class MaquinasCadastroComponent implements OnInit {
  moldes = []
  maquinas = new Maquina()
  salvando: boolean = false
  idmaquina: number

  constructor(
    private maquibaSerive: MaquinaService,
    private moldeService: MoldeService,
    private router: Router,
    private title: Title,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.listaMolde()
    this.title.setTitle('Cadastro Maquinas')
    this.idmaquina = this.route.snapshot.params['id']
    if (this.idmaquina) {
      this.spinner.show()
      this.carregarMaquina(this.idmaquina)
    } else {
      this.maquinas.status = true

    }
  }

  get editando() {
    return Boolean(this.maquinas.id)
  }

  salvar(form: NgForm) {
    if(this.editando) {
      this.atualizarMaquina(form)
    }else {
      this.adicionarMaquina(form)
    }
  }

  listaMolde() {
    this.spinner.show()
    this.moldeService.listarMolde().then(obj => {
      this.moldes = obj.map((c: { descricao: any, id: any }) =>
        ({ label: c.descricao, value: c.id }))
      this.spinner.hide()
    })
      .catch((erro) => {
        this.spinner.hide()
        // this.erroHandler.handle(erro);
      })
  }


  carregarMaquina(id: number) {
    this.maquibaSerive.buscarId(id).then((obj) => {
      this.maquinas = obj
      this.atualizarTituloEdicao()
      this.spinner.hide()
    })
      .catch((erro) => {
        this.spinner.hide()
        // this.erroHandler.handle(erro);
      })
  }

  adicionarMaquina(form: NgForm) {
    this.salvando = true
    this.maquibaSerive.adicionarMaquina(this.maquinas).then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Maquina',
        detail: `${obj.descricao}, Adicionado com sucesso!`
      })
      this.salvando = false
      this.router.navigate(['/maquinas'])
    })
      .catch((erro) => {
        this.spinner.hide()
        // this.erroHandler.handle(erro);
      })
  }

  atualizarMaquina(form: NgForm) {
    this.salvando = true
    this.maquibaSerive.atualizarMaquina(this.maquinas).then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maquina',
        detail: `${obj.descricao}, Atualizado com sucesso!`
      })
      this.atualizarTituloEdicao()
      this.salvando = false
      this.router.navigate(['/maquinas'])
    })
    .catch((erro) => {
      this.spinner.hide()
      // this.erroHandler.handle(erro);
    })
  }



  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Maquina: ${this.maquinas.descricao}`)
  }

}
