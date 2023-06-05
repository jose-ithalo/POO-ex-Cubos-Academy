interface Produto {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {

    private cliente: string
    private transacao: Produto[]

    constructor(clien: string) {
        this.cliente = clien;
        this.transacao = [];
    }

    private formartarNum(num: number): string {

        const numeroFormatado: number = num / 100;

        return numeroFormatado.toFixed(2).replace('.', ',');

    }

    registrarProduto(produto: Produto) {
        this.transacao.push(produto);
    }


    get fecharFatura(): string {

        let fatura: string = `Cliente: ${this.cliente}\n\n`;
        let total: number = 0;

        for (const item of this.transacao) {

            total += item.quantidade * item.valor

            fatura += `${item.quantidade} - ${item.descricao} ` +
                `(R$: ${this.formartarNum(item.valor)}) = ` +
                `R$: ${this.formartarNum(item.quantidade * item.valor)}\n`
        }

        fatura += `\n\nTotal: R$ ${this.formartarNum(total)}`;

        return fatura
    }

}

const faturaClayton = new Fatura('Clayton');

faturaClayton.registrarProduto({
    descricao: 'Camisa Preta',
    valor: 5990,
    quantidade: 2
});

faturaClayton.registrarProduto({
    descricao: 'Camisa Azul',
    valor: 7900,
    quantidade: 1
});

console.log(faturaClayton.fecharFatura);
