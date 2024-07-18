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
    findContact: function(name){
        return this.people.find(person => person.name === name);
    },
    addContact: function(name, phone, email){
        this.people.push({name, phone, email});
    },
}

let findContact = contactBook.findContact('Anna');
console.log(findContact);

contactBook.addContact('Alex', 129, 'alex@example.com');
console.log(contactBook.people);
