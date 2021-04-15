import Acai from "./acai";
import Cliente from "./cliente";
import Endereco from "./endereco";
import Pedido from "./pedido";
import Status from "./status";
import Usuario from "./usuario";
import interationCliente from "./interationCliente";
import interationVendedor from "./interationVendedor";
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
let clinte:interationCliente = new interationCliente(new Pedido());
let meuPedido:Pedido = clinte.realizarPedido(acai, true, false, endereco);
//console.log(clinte.vizualizarPedido(meuPedido));
meuPedido = clinte.incrementarPedido(meuPedido,acai);
//clinte.vizualizarPedido(meuPedido);
let vendedor:interationVendedor = new interationVendedor();
meuPedido = vendedor.atualizarStatus(meuPedido, "A caminho");
clinte.vizualizarPedido(meuPedido);