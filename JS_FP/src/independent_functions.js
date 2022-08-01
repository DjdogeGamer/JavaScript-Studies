const random = (number, Math) =>
    Math.floor(Math.random() * number);

// Recursivo
// Achar o fatorial de um número

const factorial = x => {
    // Se numero igual à 0
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}