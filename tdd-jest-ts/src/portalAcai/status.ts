import Pedido from "./pedido";

class Status{
  private andamentoStatus: boolean;
  public constructor(andamentoStatus: boolean){
    this.andamentoStatus = andamentoStatus;
  }
  public mudarStatus(pedido:Pedido, status:string){
    pedido.setStatus(status);
  }
}

export default Status