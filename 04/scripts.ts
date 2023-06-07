class Pessoa {

    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string) { }

    verificarIrmao(pessoa: Pessoa): boolean {
        return this.nomeMae === pessoa.nomeMae || this.nomePai === pessoa.nomePai;
    }

    ehMaisVelha(pessoa: Pessoa): boolean {
        return this.idade > pessoa.idade;
    }
}

const ryan = new Pessoa('Ryan', 17, 'Ronaldo', 'Laura');
const susan = new Pessoa('Susan', 21, 'Harold', 'Natália');

// console.log(ryan.verificarIrmao(susan));

console.log(susan.ehMaisVelha(ryan));
