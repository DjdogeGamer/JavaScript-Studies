// Função Impura

// Ex1: Está Dependendo de dado externo no qual
// Não foi passado como parâmetro

function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// Ex2: Está alterando um dado externo

let person = {
    name: 'Rafael',
    age: 18
}

function changeName(name) {
    person.name = name 
}

// Funções Puras

// Ex1 
const calculateCircumference = function (pi, radius) {
    return pi * (radius * radius)
}

// Com Arrow Function

const calculateCircumference = (pi, radius) => 
    pi * (radius + radius)

// Ex2 
const changePersonName = (person, name) => 
    ({...person, name})