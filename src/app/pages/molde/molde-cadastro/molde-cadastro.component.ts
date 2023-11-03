import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Molde } from '../../../core/module/molde.modul';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MoldeService } from '../molde.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-molde-cadastro',
  templateUrl: './molde-cadastro.component.html',
  styleUrls: ['./molde-cadastro.component.css']
})
export class MoldeCadastroComponent implements OnInit {

  molde = new Molde();
  salvando: boolean = false
  idmolde: number;

  constructor(
    private moldeService: MoldeService,
    private router: Router,
    private title: Title,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
    this.title.setTitle('Cadastro Molde')
    this.idmolde = this.route.snapshot.params['id']
    if (this.idmolde) {
      this.spinner.show()
      this.carregarMolde(this.idmolde)
    } else {
      this.molde.status = true

    }


  }

  get editando() {
    return Boolean(this.molde.id)
  }

  salva(form: NgForm) {
    if (this.editando) {
      this.atualizarMolde(form)
    } else {
      this.adicionarMolde(form)
    }

  }

  adicionarMolde(form: NgForm) {
    this.salvando = true
    this.moldeService.adicionarMolde(this.molde).then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Molde',
        detail: `${obj.descricao}, Adicionado com sucesso!`
      })
      this.salvando = false
      this.router.navigate(['/moldes'])
    })
      .catch((erro) => {
        this.salvando = false;
        // this.erroHandler.handle(erro);
      })
  }

  atualizarMolde(form: NgForm) {
    this.salvando = true
    this.moldeService.atualizarModle(this.molde).then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Molde',
        detail: `${obj.descricao}, Atualizado com sucesso!`
      })
      this.atualizarTituloEdicao();
      this.salvando = false
      this.router.navigate(['/moldes'])
    })
      .catch((erro) => {
        this.salvando = false;
        // this.erroHandler.handle(erro);
      })
  }


  carregarMolde(id: number) {
    this.moldeService.buscarId(id).then((obj) => {
      this.molde = obj;
      this.atualizarTituloEdicao()
      this.spinner.hide()
    })
      .catch((erro) => {
        this.spinner.hide()
        // this.erroHandler.handle(erro);
      })
  }



  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Molde: ${this.molde.descricao}`)
  }


}
