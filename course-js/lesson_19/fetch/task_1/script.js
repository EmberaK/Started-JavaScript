function getNameUser(){
    fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            const userName = data.map(user => user.name)
            console.log(userName)
        }
        )
        .catch(error => console.log(error))
}
getNameUser()
