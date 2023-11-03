import { Molde } from "./molde.modul"

export class Maquina {
  id?: number
  descricao?: string
  status?: boolean
  datacadastro = new Date()
  molde =  new Molde()

}
