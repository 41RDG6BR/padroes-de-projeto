// Em diagramas UML o diamante aberto representa agregaçao e o fecha composição
export class Carro {
    private motor: Motor;

    constructor(motor: Motor) {
        this.motor = motor;
    }
}
export class Motor {
    // Codigo omitido
}

const motor =  new Motor();
const carro =  new Carro(motor);

console.log(carro);