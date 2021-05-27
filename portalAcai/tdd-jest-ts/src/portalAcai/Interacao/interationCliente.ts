import Endereco from '../RelacoesUsuario/endereco';
import Pedido from '../Pedido/pedido'
import Acai from '../Pedido/acai'
import interfaceCliente from '../Interfaces/interfaceCliente';

export class interationCliente implements interfaceCliente {
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

