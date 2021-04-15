import Endereco from './endereco';
import Pedido from './pedido'
import Acai from './acai'

export class interationCliente {
  private pedido:Pedido;

  constructor(pedido:Pedido) {
    this.pedido = pedido;
  }

    realizarPedido = (itensAcai:Acai, tipoPagamento:boolean, tipoEntrega:boolean, endereco:Endereco):Pedido=>{
      let pedido:Pedido = new Pedido();
      return (pedido.fazerPedido(tipoEntrega, tipoEntrega, endereco, itensAcai));
    }
    public incrementarPedido(pedido:Pedido, acai:Acai):Pedido{
      return pedido.incrementarPedido(acai);
    }
    /*
    mudarEnderecoEntrega:()=>void
    verStatus:()=>string
    */
   public vizualizarPedido = (pedido:Pedido)=>{
    pedido.imprimirPedido();
   }
  }
  export default interationCliente;

