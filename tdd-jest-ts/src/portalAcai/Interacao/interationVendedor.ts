import Pedido from "../Pedido/pedido";
import interfaceVendedor from "../Interfaces/interfaceVendedor";
import Cliente from "../RelacoesUsuario/cliente";
import Endereco from "../RelacoesUsuario/endereco";
import interfaceCliente from "../Interfaces/interfaceCliente";
import interationCliente from "./interationCliente";

class interationVendedor implements interfaceVendedor{
 public atualizarStatus(cliente:Cliente, num:number, status:string):void{
      cliente.icliente.mudarStatus(num, status);
 }
 public informarDadosCliente = (endereco: Endereco, email: string, password: string, nome: string, telefone: string):Cliente=>{
  let iCliente:interationCliente = new interationCliente();
  let cliente:Cliente = new Cliente(endereco, email, password, nome, telefone, iCliente);

  return cliente;
 }
}

export default interationVendedor;