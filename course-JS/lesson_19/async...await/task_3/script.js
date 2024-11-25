async function fetchPostsAndComments() {

    async function response(nameData) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/${nameData}`);
            
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
        
            let data = await response.json();
            
            console.log(`Количество ${nameData}: ${data.length}`);
        } catch (error) {
            console.log('Error:', error.message);
        }
    }

    try {
        // Вызываем функцию для получения постов и комментариев
        await response('posts');
        await response('comments');
    } catch (error) {
        console.log('Ошибка при получении данных:', error.message);
    }
}

fetchPostsAndComments();