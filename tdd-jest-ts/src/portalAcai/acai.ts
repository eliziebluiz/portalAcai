
class Acai {
  private tamanho: string;
  private cremes: string[];
  private complementos: string[];
  private frutas: string[];

  public constructor(tamanho: string, cremes: string[], complementos: string[], frutas: string[]){
    this.tamanho=tamanho;
    this.cremes=cremes;
    this.complementos=complementos;
    this.frutas=frutas;
  }
}

export default Acai