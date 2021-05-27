import Pedido from "../Pedido/pedido";
import Acai from "../Pedido/acai";
import Endereco from "../RelacoesUsuario/endereco";

interface interfaceCliente{ 

realizarPedido(itensAcai:Acai, tipoPagamento:boolean, tipoEntrega:boolean, endereco:Endereco):Pedido;

incrementarPedido(pedido:Pedido, acai:Acai):Pedido;

vizualizarPedido(pedido:Pedido):void;

}
export default interfaceCliente;