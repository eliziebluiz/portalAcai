import Pedido from "./pedido";
class interationVendedor{
 public atualizarStatus(pedido:Pedido, status:string):Pedido{
   pedido.setStatus(status);
   return pedido;
 }
}

export default interationVendedor;