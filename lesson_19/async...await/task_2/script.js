async function fetchUser(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if(!response.ok){
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }

        let data = await response.json();
        console.log(data.name);

    } catch(error){
        console.log('Error:', error.message);
        console.log('Ошибка при получении данных')
    }
}
fetchUser();