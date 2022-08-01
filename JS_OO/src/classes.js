class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcArea()
    }

    #calcArea() {
        return this.#calcArea()
    }

    #calcArea() {
        return this.altura * this.largura
    }
}