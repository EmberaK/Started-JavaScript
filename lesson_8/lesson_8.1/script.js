let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step++;
        return this; // повертаємо об'єкт для ланцюжкового виклику
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step--;
        return this; // повертаємо об'єкт для ланцюжкового виклику
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.step);
        return this; // повертаємо об'єкт для ланцюжкового виклику
    }
};

// Тепер можна викликати методи по ланцюжку
ladder.up().up().down().showStep(); // 1
