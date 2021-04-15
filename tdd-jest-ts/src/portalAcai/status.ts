import Pedido from "./pedido";

class Status{
  private andamentoStatus: boolean;
  public constructor(andamentoStatus: boolean){
    this.andamentoStatus = andamentoStatus;
  }
  public mudarStatus(pedido:Pedido, status:string){
    pedido.setStatus(status);
  }

  atualizarStatus = (pedido:Pedido, status:string) =>{
    this.mudarStatus(pedido,status);
  }
}

export default Status