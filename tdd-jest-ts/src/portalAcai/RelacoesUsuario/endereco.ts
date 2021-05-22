
class Endereco{
  private rua: string;
  private bairro: string;
  private numero: number;
  private pontoRef: string;

  public constructor(rua: string, bairro: string, numero: number, pontoRef: string){
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.pontoRef = pontoRef;
  }
}

export default Endereco;