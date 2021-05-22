import Acai from "./Pedido/acai";
import Endereco from "./RelacoesUsuario/endereco";
import Pedido from "./Pedido/pedido";
import interationCliente from "./Interacao/interationCliente";
import interationVendedor from "./Interacao/interationVendedor";
import Cliente from "./RelacoesUsuario/cliente";
import interfaceCliente from "./Interfaces/interfaceCliente";
import Vendedor from "./RelacoesUsuario/vendedor";
/*
Cirando compentes de um Açaí
*/
let cremes = ["Limão"];
let complementos = ["M&Ms"];
let frutas = ["Morango"];
let coberturas = ["Chocolate"];
/*Criando um Açaí */
let acai:Acai = new Acai("medio",  cremes, complementos, frutas, coberturas );
/*acai.addCoberturas("Castanha");
acai.addComplementos("Leite Ninho");
acai.addCremes("Chocolate");
acai.addFturas("Castanha");*/

/*Criando um endereço */
let endereco:Endereco = new Endereco("Professor Nestor Antunes", "Prefeitura", 218, "Lava jato ");
/*Criando Pedido */
//let pedido:Pedido = new Pedido();
/*let clinte:interationCliente = new interationCliente(new Pedido());
let meuPedido:Pedido = clinte.realizarPedido(acai, true, false, endereco);
//console.log(clinte.vizualizarPedido(meuPedido));
meuPedido = clinte.incrementarPedido(meuPedido,acai);
//clinte.vizualizarPedido(meuPedido);
let vendedor:interationVendedor = new interationVendedor();
meuPedido = vendedor.atualizarStatus(meuPedido, "A caminho");
clinte.vizualizarPedido(meuPedido);*/
let interacaoVendedor:interationVendedor = new interationVendedor();
let vendedor:Vendedor = new Vendedor("00.0000.0000.0", "joao@kkk.com", "Senha","joao","66666666", interacaoVendedor);
let cliente:Cliente = vendedor.ivendedor.informarDadosCliente(endereco, "zezim@123", "password", "ze", "123456789");

cliente.icliente.realizarPedido(acai, true, true, endereco);
cliente.icliente.realizarPedido(acai, true, true, endereco);
vendedor.ivendedor.atualizarStatus(cliente, 0, "Entregue");
vendedor.ivendedor.atualizarStatus(cliente, 1, "Entregue");
cliente.icliente.vizualizarPedido();