let users = [
    { id: 'іван', name: "Іван Іванко", age: 20 },
    { id: 'ганна', name: "Ганна Іванко", age: 24 },
    { id: 'петро', name: "Петро Петренко", age: 31 },
];

function groupById(array){
    return array.reduce(((object, value)=>{
        object[value.id] = value;
        return object;
    }),{})
}

let usersById = groupById(users);

console.log(usersById);
/*
// після виклику функції ви повинні отримати:
 
usersById = {
  іван: {id: 'іван', name: "Іван Іванко", age: 20},
  ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
  петро: {id: 'петро', name: "Петро Петренко", age: 31},
}
*/