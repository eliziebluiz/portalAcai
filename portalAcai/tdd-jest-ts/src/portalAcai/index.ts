//import { interationCliente } from './Interacao/interationCliente';
import Acai from "../portalAcai/Pedido/acai";
import Endereco from "../portalAcai/RelacoesUsuario/endereco";
import Pedido from "../portalAcai/Pedido/pedido";
import interfaceCliente from "../portalAcai/Interfaces/interfaceCliente";
import interfaceVendedor from "../portalAcai/Interfaces/interfaceVendedor";
import interationCliente from "../portalAcai/Interacao/interationCliente";
import interationVendedor from "../portalAcai/Interacao/interationVendedor";
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