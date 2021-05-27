import Pedido from "../Pedido/pedido";
interface interfaceVendedor{
  atualizarStatus(pedido:Pedido, status:string):Pedido;

}

export default interfaceVendedor;