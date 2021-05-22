import interfaceVendedor from "../Interfaces/interfaceVendedor";
import Usuario from "../RelacoesUsuario/usuario";


class Vendedor extends Usuario{
  private cnpj: string;
  public ivendedor: interfaceVendedor;

  public constructor(cnpj: string, email: string, password: string, nome: string, telefone: string, ivendedor: interfaceVendedor ){
    super(email, password, nome, telefone)
    this.cnpj = cnpj;
    this.ivendedor = ivendedor; 
  }
  
}

export default Vendedor