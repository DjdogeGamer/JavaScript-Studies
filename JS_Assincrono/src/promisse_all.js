import axios from 'axios'
Promise.all([
    axios.get('https://api.github.com/users/DjdogeGamer'),
    axios.get('https://api.github.com/users/DjdogeGamer/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[0].data.lenght)
})
.catch(err => console.log(err.message))