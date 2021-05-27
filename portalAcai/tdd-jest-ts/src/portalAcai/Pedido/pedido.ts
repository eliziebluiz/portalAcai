import Endereco from "../RelacoesUsuario/endereco";
import Acai from "../Pedido/acai";

class Pedido {
  private tipoPagamento: boolean | null;
  private tipoEntrega: boolean| null;
  private status: string;
  private itensAcai: Acai[] ;
  private enderecoEntrega: Endereco | null;
  private quantidadeAcai: number;
  private valor:number;
  //private acai:Acai;

  public constructor(){
   this.valor = 0;
   this.quantidadeAcai = 0; 
  this.tipoPagamento = null;
  this.tipoEntrega = false;
  this.status = "";
  this.enderecoEntrega = null;
  this.itensAcai = [];
  }
  setStatus(novoStatus:string) {
    this.status = novoStatus;
  }
  public getStatus():string{
    return this.status;
  }

  /**
   * 
   */
  public calculaPrecoAcai(acai:Acai[]):number {
    let valor = 0.0;
    for(let i = 0; i < acai.length; i++){
        valor += acai[i].getPreco();
    }
    return valor;
  }
  /**
   * Método que implementa o metodo da interface interationCliente fazer pedido
   */
   
  fazerPedido = ( tipoPagamento: boolean, tipoEntrega: boolean, enderecoEntrega:Endereco,   itensAcai:Acai ):Pedido => {
    let pedido:Pedido = new Pedido();
    pedido.itensAcai.push(itensAcai);
    pedido.valor = this.calculaPrecoAcai(pedido.itensAcai);
    pedido.status = "Preparando";
    pedido.quantidadeAcai = pedido.itensAcai.length;
    pedido.enderecoEntrega = enderecoEntrega;
    pedido.tipoEntrega = tipoEntrega;
    pedido.tipoPagamento = tipoPagamento;
   
    return pedido;
  }

  public incrementarPedido(acai:Acai):Pedido{
    this.itensAcai.push(acai);
    this.valor = this.calculaPrecoAcai(this.itensAcai);
    this.quantidadeAcai = this.itensAcai.length;

    return this;
  }
  mudarEndercoEntrega = (endereco:Endereco) =>{
    this.enderecoEntrega = endereco;
  }
  verStatus = (pedido:Pedido) =>{
    console.log(pedido.getStatus());
  }
  /**
   * Metodo destinado a montar (juntar) os componentets do Açaí.
   */
  public montarAcai(itensAcai:Acai[]) {
    for(let i = 0; i <= itensAcai.length; i++){
      console.log(itensAcai[i].pedidoMontado());
    }
  }
public getValor():number{
 return this.valor;
}

public imprimirPedido(){
console.log(`Tipo de pagamento: (${this.tipoPagamento})\n Tipo  de entrega: (${this.tipoEntrega})\n Valor: (${this.valor})\n Status: (${this.status}) `);
for(let i = 0; i < this.itensAcai.length; i++){
  console.log("======================================================")
  console.log(this.itensAcai[i].pedidoMontado());
}
}
}

export default Pedido