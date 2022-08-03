let status = true

console.log('Promessa enviada')
const promessa = new Promise((resolve, reject) => {
    if (status) {
        return resolve('Promessa cumprida')
    } else {
        return reject('Promessa não cumprida')
    }
})

promessa
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Promessa finalizada'))

console.log("Aguardando Promessa")