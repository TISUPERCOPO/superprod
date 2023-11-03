import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Maquina } from 'src/app/core/module/maquina.modul';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  maquinaUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.maquinaUrl = 'https://6537f565a543859d1bb112a7.mockapi.io/maquinas'
  }

  listarMaquina(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.maquinaUrl}`)).then((response) => {
      const obj = response as any []
      return obj;
    })
  }

  adicionarMaquina(maquina: Maquina): Promise<Maquina> {
    return firstValueFrom(this.http.post<Maquina>(this.maquinaUrl, maquina))
  }

  atualizarMaquina(maquina: Maquina): Promise<Maquina> {
    return firstValueFrom(this.http.put<Maquina>(`${this.maquinaUrl}/${maquina.id}`, maquina))
  }

  buscarId(id: number): Promise<Maquina> {
    return firstValueFrom(this.http.get(`${this.maquinaUrl}/${id}`)).then((response) => response as Maquina)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return firstValueFrom(this.http.put(`${this.maquinaUrl}/${id}/status`, status, {headers})).then(() => null)
  }

  AlternarLista(valor: string): Promise<any> {
    return firstValueFrom(this.http.get(`${this.maquinaUrl}${valor}`))
  }
}
