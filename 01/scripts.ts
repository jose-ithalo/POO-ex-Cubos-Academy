class Calculadora {

    private numero1: number
    private numero2: number

    constructor(num1: number, num2: number) {
        this.numero1 = num1
        this.numero2 = num2
    }

    somar(): number {

        const resultado: number = this.numero1 + this.numero2;

        return resultado;
    }

    subtrair(): number {

        const resultado: number = this.numero1 - this.numero2;

        return resultado;
    }

    multiplicar(): number {

        const resultado: number = this.numero1 * this.numero2;

        return resultado;
    }

    dividir(): number {

        const resultado: number = this.numero1 / this.numero2;

        return resultado;
    }


}

const calculadora1 = new Calculadora(22, 6);
const calculadora2 = new Calculadora(14, 8);
const calculadora3 = new Calculadora(7, 6);
const calculadora4 = new Calculadora(22, 6);

console.log('Soma: ', calculadora1.somar());
console.log('Subtração: ', calculadora2.subtrair());
console.log('Multiplicação: ', calculadora3.multiplicar());
console.log('Divisão: ', calculadora4.dividir());
