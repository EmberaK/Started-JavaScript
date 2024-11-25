async function fetchPostsAndComments() {

    async function response(url, nameData) {
        try {
            let response = await fetch(url);
            
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
        await Promise.all([
            response("https://jsonplaceholder.typicode.com/posts", 'posts'),
            response("https://jsonplaceholder.typicode.com/comments", 'comments')
        ])
        
    } catch (error) {
        console.log('Ошибка при получении данных:', error.message);
    }
}

fetchPostsAndComments();