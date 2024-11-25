function getInformation(resource) {
    const url = 'https://jsonplaceholder.typicode.com/';
    let urlOnResource = url + resource;
    fetch(urlOnResource)
        .then(response => response.json())
        .then(data => {
            console.log(`Information about ${resource}:`, data);
        })
        .catch(error => console.log(`Error: ${error}`)); 
}

getInformation('posts');
getInformation('comments');
getInformation('albums');
getInformation('photos');
getInformation('todos');
getInformation('users');