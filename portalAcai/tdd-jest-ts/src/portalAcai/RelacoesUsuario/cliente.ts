import Usuario from "../RelacoesUsuario/usuario"
import Endereco from '../RelacoesUsuario/endereco'

class Cliente extends Usuario{
  private endereco: Endereco;


  public constructor(endereco: Endereco, email: string, password: string, nome: string, telefone: string){
    super(email, password, nome, telefone);
    this.endereco = endereco;
  }





}

export default Cliente
