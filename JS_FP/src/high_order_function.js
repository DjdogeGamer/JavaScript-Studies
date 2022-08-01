// Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const squre = n => n * n

const squredNumber = numbers.map(square)

// Exemplo de um retorno de função
// (Currying ou aplicação parcial de função)

const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('Waiting 600ms') )

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200( () => console.log('Waiting 200ms'))
wait1000( () => console.log('Waiting 1s'))