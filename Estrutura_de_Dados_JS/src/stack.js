// Modelagem da Stack (Pilha)

class data {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(value) {
        this.top++;
        this.data[this.top] = value;
    }

    pop() {
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return poppedTop;
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined;
    }
}

// Implementação da Stack (Pilha)

const stack = new stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3