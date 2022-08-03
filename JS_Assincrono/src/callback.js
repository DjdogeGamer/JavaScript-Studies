// Funções que aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
    console.log(dado())
}

imprimirDado(function () { return 'Eai' })