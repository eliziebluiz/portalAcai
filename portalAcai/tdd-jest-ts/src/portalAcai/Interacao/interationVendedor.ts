import interfaceVendedor from "../Interfaces/interfaceVendedor";
import Pedido from "../Pedido/pedido";

class interationVendedor implements interfaceVendedor{
 public atualizarStatus(pedido:Pedido, status:string):Pedido{
   pedido.setStatus(status);
   return pedido;
 }
}

export default interationVendedor;