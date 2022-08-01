// Statful vs Stateless

let number = 2;

// Stateful Function

function square() {
    return number * number
}

number = square()

// Stateless Function

const square = n => n * n;