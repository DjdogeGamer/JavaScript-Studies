// Modelagem

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(valor) {
        this.data.push(valor);
        console.log(`Item ${valor} adicionado com sucesso!`);
    }

    dequeue() {
        const item = this.data.shift();
        console.log(`Item ${item} removido com sucesso!`);
    }
}

// Implementação	

const fila = new Queue();

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);

fila.dequeue();
fila.dequeue();
fila.dequeue();