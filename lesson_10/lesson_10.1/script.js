let userName = prompt('Please enter your name', 'Yulia');
let userLive = prompt('Please enter your live', 'Poltava');
let userAge = prompt('Please enter your age', '19');

let person = {
    name: userName,
    live: userLive,
    age: userAge,
    displayInfo: function() {
        console.log('Your name is', this.name);
        console.log('You live in:', this.live);
        console.log('Your age is:', this.age);
    }
};

person.displayInfo();