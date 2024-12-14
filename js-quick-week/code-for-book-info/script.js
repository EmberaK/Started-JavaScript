// Создай объект, который описывает книгу, и функцию, которая выводит информацию о книге.

const infoBook ={
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    description: "A novel about the serious issues of rape and racial inequality, narrated by a young girl in the Deep South.",  
}

function getInfoBook(obj){
    console.log(`Title: ${obj.title}.`);
    console.log(`Author: ${obj.author}.`);
    console.log(`Year: ${obj.year}.`);
    console.log(`Genre: ${obj.genre}.`);
    console.log(`Description: ${obj.description}.`);
}
getInfoBook(infoBook);
