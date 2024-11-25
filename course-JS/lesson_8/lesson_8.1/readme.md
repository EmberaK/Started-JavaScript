Task on english:

Create a ladder object that allows you to climb up and down:

let ladder = {
up: function () { // will raise you up one step
},
down: function () { // will lower you down one step
},
showStep: function () { // shows the current step
}
};

Now, if we need to make several consecutive calls, we can do it like this:

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

Change the code of the up, down, and showStep methods so that they can be called in a chain, for example:

ladder.up().up().down().showStep(); // 1

This approach is widely used in JavaScript libraries. 

Task on ukr:
Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

Copy code
let ladder = {
  up: function () { // підніматиме вас на одну сходинку
  },
  down: function () { // опускатиме вас на одну сходинку
  },
  showStep: function () { // показує поточну сходинку
  }
};
Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1

Такий підхід широко використовується в бібліотеках JavaScript.