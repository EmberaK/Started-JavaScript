document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#myForm");

    // input for name
    const blockForName = form.querySelector("#blockForName");
    const name = blockForName.querySelector("#name");
    const masageForName = blockForName.querySelector("#masageForName");

    name.addEventListener('input', () => {
        if (name.value.trim() === "") {
            masageForName.textContent = "Введіть своє ім'я.";
        } else {
            masageForName.textContent = "";
        }
    })

    // input for message
    const blockForMessage = form.querySelector("#blockForMessage");
    const message = blockForMessage.querySelector("#message");
    const messageForMessage = blockForMessage.querySelector("#messageForMessage");

    message.addEventListener("input", () => {
        if (message.value.trim().length < 5) {
            messageForMessage.textContent = "Введіть не меньше 5 символів в текстове поле.";
        } else {
            messageForMessage.textContent = "";
        }
    })

    // input for number
    const blockForNumber = form.querySelector("#blockForNumber");
    const phoneNumber = blockForNumber.querySelector("#phone_number");
    const messageForNumber = blockForNumber.querySelector("#messageForNumber");

    phoneNumber.addEventListener('input', () => {
        if (!phoneNumber.value.startsWith("+380")) {
            messageForNumber.textContent = "Допишіть до початка '+380' ";
        } else if (phoneNumber.value.length !== 13) {
            messageForNumber.textContent = "Номер повинен мати 13 символів, провірьте кількість символів.";
        } else {
            messageForNumber.textContent = "";
        }
    })

    // input for email
    const blockForEmail = form.querySelector("#blockForEmail");
    const email = blockForEmail.querySelector("#email");
    const messageForEmail = blockForEmail.querySelector("#messageForEmail");

    email.addEventListener('input', () => {
        if (!email.value.includes("@")) {
            messageForEmail.textContent = "Email повинен містити '@'.";
        } else if (!email.value.includes(".")) {
            messageForEmail.textContent = "Email повинен містити '.'.";
        } else {
            messageForEmail.textContent = "";
        };
    });
    form.addEventListener('submit', (event) => {
        // не дает перезагрузить страницу
        event.preventDefault();

        // 1 variant
        console.log("Name:", name.value);
        console.log("Message:", message.value);
        console.log("Phone Number:", phoneNumber.value);
        console.log("Email:", email.value);

        // 2 variant
        console.log(`Пользователь ввів: 
            Name: ${name.value},
            Message: ${message.value},
            Phone Number: ${phoneNumber.value},
            Email: ${email.value}`)
    });
});