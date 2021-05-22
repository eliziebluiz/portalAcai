import Endereco from '../RelacoesUsuario/endereco';
import Pedido from '../Pedido/pedido'
import Acai from '../Pedido/acai'
import interfaceCliente from '../Interfaces/interfaceCliente';
import Cliente from "../RelacoesUsuario/cliente";

export class interationCliente implements interfaceCliente {
  private pedidos:Pedido[];

  constructor() {
    this.pedidos = [] ;
  }
    realizarPedido = (itensAcai:Acai, tipoPagamento:boolean, tipoEntrega:boolean, endereco:Endereco)=>{
      let pedido:Pedido = new Pedido();
      this.pedidos.push((pedido.fazerPedido(tipoEntrega, tipoEntrega, endereco, itensAcai)));
    }
   /* public incrementarPedido(pedido:Pedido, acai:Acai):Pedido{
      return pedido.incrementarPedido(acai);
    }*/
    /*
    mudarEnderecoEntrega:()=>void
    verStatus:()=>string
    */
   public vizualizarPedido = ()=>{
     let valor:number = 0;
     for (const p of this.pedidos) {
        p.imprimirPedido();
        valor = valor + p.getValor();
       }
       console.log("Valor total: R$ ", valor);
     }
     public mudarStatus(num:number, status:string):void{
      this.pedidos[num].setStatus(status);
     }
    

   }
  export default interationCliente;

