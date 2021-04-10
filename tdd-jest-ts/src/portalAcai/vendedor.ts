import Usuario from "./usuario";

class Vendedor extends Usuario{
  private cnpj: string;

  public constructor(cnpj: string, email: string, password: string, nome: string, telefone: string){
    super(email, password, nome, telefone)
    this.cnpj = cnpj;
  }
}

export default Vendedor