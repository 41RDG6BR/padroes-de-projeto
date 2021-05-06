export class UmaClasse {
    constructor(
        //Atributos
        private nome: String,
        public sobrenome: String,
        protected idade: number
    ) {}
        //Metodos = Operações
    public getNome(): string { //Modificador de acesso, nome  do metodo e o tipo de retorno
        return this.nome;
    }

    public getIdade(): string {
        return this.nome;
    }

    public setNome(nome: string): void {//Modificador de acesso, nome  do metodo, os parametros que ele recebe e o tipo de retorno
        return this.nome = nome;
    }

    public setIdade(idade: number): void {
        return this.idade = idade;
    }

}
