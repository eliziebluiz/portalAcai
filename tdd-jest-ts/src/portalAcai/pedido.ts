import Endereco from "./endereco";
import Acai from "./acai";

class Pedido {
  private tipoPagamento: boolean;
  private tipoEntrega: boolean;
  private status: string;
  private itensAcai: Acai[];
  private enderecoEntrega: Endereco;
  private quantidadeAcai: Number;
  private valor:Number;

  public constructor(tipoPagamento: boolean, tipoEntrega: boolean, status: string, enderecoEntrega:Endereco, quantidadeAcai: Number, valor:Number, itensAcai:Acai[]){
    this.tipoPagamento=tipoPagamento;
    this.tipoEntrega=tipoEntrega;
    this.status=status;
    this.itensAcai=itensAcai;
    this.enderecoEntrega=enderecoEntrega;
    this.quantidadeAcai=quantidadeAcai;
    this.valor=valor;
  }

  setStatus(novoStatus:string) {
    this.status = novoStatus
  }
}

export default Pedido