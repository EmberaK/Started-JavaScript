async function fetchUser(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        console.log(data.name);
    } catch(error){
        console.log('Error:', error.message)
    }
}
fetchUser();