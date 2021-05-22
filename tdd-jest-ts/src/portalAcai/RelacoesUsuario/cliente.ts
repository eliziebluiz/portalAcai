import { interationCliente } from './../Interacao/interationCliente';
import Usuario from "../RelacoesUsuario/usuario"
import Endereco from '../RelacoesUsuario/endereco'
import interfaceCliente from "../Interfaces/interfaceCliente";

class Cliente extends Usuario{
  private endereco: Endereco;
  public icliente: interfaceCliente;

  public constructor(endereco: Endereco, email: string, password: string, nome: string, telefone: string, icliente: interfaceCliente){
    super(email, password, nome, telefone);
    this.endereco = endereco;
    this.icliente = icliente;
  }





}

export default Cliente
