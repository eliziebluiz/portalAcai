class Usuario{
  private email: string;
  private password: string;
  private nome: string;
  private telefone: string;

  public constructor(email: string, password: string, nome: string, telefone: string){
    this.email = email;
    this.password = password;
    this.nome = nome;
    this.telefone = telefone;
  }

  public getEmail(){
    return this.email;
  }
}

export default Usuario