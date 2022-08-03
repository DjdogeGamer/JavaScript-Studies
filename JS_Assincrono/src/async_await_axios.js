import axios from 'axios'

async function fetchRepos() { 
    try {
        const user = await axios.get('https://api.github.com/users/DjdogeGamer')
        const repos = await axios.get('https://api.github.com/users/DjdogeGamer/repos')
        console.log(repos.data)
    } catch(e) {
        console.log(e)
    }
}

fetchRepos()