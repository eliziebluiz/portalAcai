import Pedido from "../Pedido/pedido";
import Acai from "../Pedido/acai";
import Endereco from "../RelacoesUsuario/endereco";
import Cliente from "../RelacoesUsuario/cliente";
interface interfaceCliente{ 

realizarPedido(itensAcai:Acai, tipoPagamento:boolean, tipoEntrega:boolean, endereco:Endereco):void;

//incrementarPedido(pedido:Pedido, acai:Acai):Pedido;

vizualizarPedido():void;

mudarStatus(num:number, status:string):void;
}
export default interfaceCliente;