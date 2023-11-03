import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Molde } from 'src/app/core/module/molde.modul';

@Injectable({
  providedIn: 'root'
})
export class MoldeService {

  moldeURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.moldeURL = 'https://6537f565a543859d1bb112a7.mockapi.io/moldes'
   }

listarMolde(): Promise<any>  {
  return firstValueFrom(this.http.get(`${this.moldeURL}`)).then((response) => {
    const obj = response as any []
    return obj;
  })
}




adicionarMolde(molde: Molde): Promise<Molde> {
  return firstValueFrom(this.http.post<Molde>(this.moldeURL, molde))
}


atualizarModle(molde: Molde): Promise<Molde> {
  return firstValueFrom(this.http.put<Molde>(`${this.moldeURL}/${molde.id}`, molde)).then((response) => response as Molde)
}

buscarId(id: number): Promise<Molde> {
  return firstValueFrom(this.http.get(`${this.moldeURL}/${id}`)).then((response) => response as Molde)
}

mudarStatus(id: number, status: boolean) {
  const headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );
  return firstValueFrom(this.http.put(`${this.moldeURL}/${id}/status`, status, {headers})).then(() => null)
}

AlternarLista(valor: string): Promise<any> {
return firstValueFrom(this.http.get(`${this.moldeURL}${valor}`))

}

}


