class Lampada {

    private ligada = false;

    constructor(public watts: number) { }

    ligar() {
        this.ligada = true;
    }

    desligar() {
        this.ligada = false;
    }

    get medirPotencia(): string {
        if (!this.ligada) {
            return 'A lâmpada está desligada. Ligue-a para poder medir.'
        }

        return `Potência da lâmpada: ${this.watts}W`;
    }

}

const lampada = new Lampada(12);

lampada.ligar();

console.log(lampada.medirPotencia);
