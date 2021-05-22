import Pedido from "../Pedido/pedido";
import Endereco from "../RelacoesUsuario/endereco";
import Cliente from "../RelacoesUsuario/cliente";

interface interfaceVendedor{
  atualizarStatus(cliente:Cliente, num:number, status:string):void;
  informarDadosCliente(endereco: Endereco, email: string, password: string, nome: string, telefone: string):Cliente;

}

export default interfaceVendedor;