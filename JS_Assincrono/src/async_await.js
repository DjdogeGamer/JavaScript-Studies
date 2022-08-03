const promessa = new Promise ( function(resolve, reject) {
    return resolve('ok')
})

async function start1() {
	const result = await promessa
	console.log(result)
}

start1()

async function start2() {
    try {
        const result = await promessa
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }
}

start2()