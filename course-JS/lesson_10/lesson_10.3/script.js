let contactBook = {
    // список контактов
    people: [
        {   
            name: 'Yulia',
            phone: 383,
            email: 'yulia@example.com'
        },
        {   
            name: 'Ivan',
            phone: 385,
            email: 'ivan@example.com'
        }, 
        {   
            name: 'Anna',
            phone: 387,
            email: 'anna@example.com'
        },
        {   
            name: 'Vasili',
            phone: 389,
            email: 'vasili@example.com'
        },
        {   
            name: 'Sofia',
            phone: 391,
            email:'sofia@example.com'
        },
    ], 
    // поиск контактов
    findContact: function(name){
        return this.people.find(person => person.name === name);
    },
    // добавление новых контактов
    addContact: function(name, phone, email){
        this.people.push({name, phone, email});
    },
}
// виклик писка контактов
let findContact = contactBook.findContact('Anna');
console.log(findContact);

// виклик добавление нового контакта 
contactBook.addContact('Alex', 129, 'alex@example.com');
console.log(contactBook.people);
