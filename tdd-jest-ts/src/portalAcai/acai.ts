
class Acai {
  private tamanho: string;
  private cremes: string[];
  private complementos: string[];
  private frutas: string[];
  private coberturas: string[];
  public preco:number = 0.0;

  public constructor(tamanho: string, cremes: string[], complementos: string[], frutas: string[], coberturas:string[]){
    this.tamanho = tamanho;
    this.cremes = cremes;
    this.complementos = complementos;
    this.frutas = frutas;
    this.coberturas = coberturas;
    this.preco = this.precoDoAcai(this.tamanho);
  }
  public getTamanho():string{
    return this.tamanho;
  }
  /**
   * Adiciona tamanho do pote de Açaí (200, 250, 300, 500)ML são exemplos de  tamanhos.
   */
  public addTamanho(tamanho:string) {
    this.tamanho = tamanho;
  }
  /**
 * Adiciona creme
 */
public addCremes(creme:string) {
 this.cremes.push(creme);
}
/**
 * Adiciona complementos Complementos
 */
public addComplementos(complementos:string) {
  this.complementos.push(complementos);
}
/**
 * Adiciona Coberturas
 */
public addCoberturas(cobertura:string) {
  this.coberturas.push(cobertura);
}
/**
 * Adiciona Fturas
 */
public addFturas(frutas:string) {
  this.frutas.push(frutas);
}
/**
 * Remove ultimo elemento do array  coberturas
 */
private delCobertura(cobertura:string) {
  this.coberturas.pop();
}
/**
 * Remove ultimo elemento do array cremres
 */
public delCremres() {
  this.coberturas.pop();
}
/**
 * Remove ultimo elemento do array complementos
 */
public delComplementos() {
  this.complementos.pop();
}
/**
 * Remove ultimo elemento do array frutas
 */
public delFrutas() {
  this.frutas.pop();
}
/**
 * Método que monta o Açaí.
 */
public pedidoMontado():string {
  return `Tamanho:(${ this.tamanho})\n
  Coberturas: (${this.coberturas})\n
  Cremes: (${this.cremes})\n
  Complementos:(${this.complementos})\n
  Frutas:(${this.frutas})`;
}
public precoDoAcai (tamanho:string):number{
  let valor = 0.0;
  if(tamanho === "pequeno"){
    valor += 5.0;
  }else if(tamanho === "medio"){
    valor += 10.0;
  }else if(tamanho === "grande"){
    valor += 15.0;
  }else if(tamanho === "mega"){
    valor += 20.0;
  }else{
    console.log("Você inseriu um tamnho que não existe");
    return 0.0;
  }
  return valor;
}

public getPreco ():number{
  return this.preco;
}
}

export default Acai