const { response } = require("express")

const url = "http://localhost:5500/api"

function gerUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(user_id) {
    fetch(`${url}/${user_id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.log(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = data)
        .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method:"DELETE",
        headers: {
            "Content-type:":"application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = data)
        .catch(error => console.error(error))
}

const updatedUser = {
    name:"Marcelo",
    avatar:"https://picsum.photos/200/300",
    city: "Recife"
}

const newUser = {
    name: "Olivia",
    avatar: "http://lorempixel.com/400/200",
    city: "Rio do Sul"
}

//addUser(newUser)

deleteUser()
updateUser(updateUser, 1)
getUsers()
getUser(1)