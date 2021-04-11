import Acai from "./acai";
import Cliente from "./cliente";
import Endereco from "./endereco";
import Pedido from "./pedido";
import Status from "./status";
import Usuario from "./usuario";
import vendedor from "./vendedor";

/*
Cirando compentes de um Açaí
*/
//let tamanhos = ["200", "250", "300", "350", "400", "450", "500"];
let cremes = ["Limão"];
let complementos = ["M&Ms"];
let frutas = ["Morango"];
let coberturas = ["Chocolate"];
/*Criando um Açaí */
let acai:Acai = new Acai("350",  cremes, complementos, frutas, coberturas );
acai.addCoberturas("Castanha");
acai.addComplementos("Leite Ninho");
acai.addCremes("Chocolate");
acai.addFturas("Castanha");

/*Criando um endereço */
let endereco:Endereco = new Endereco("Professor Nestor Antunes", "Prefeitura", 218, "Lava jato ");
/*Criando Pedido */
let pedido:Pedido = 

console.log(pedido.fazerPedido());
console.log(acai.pedidoMontado());