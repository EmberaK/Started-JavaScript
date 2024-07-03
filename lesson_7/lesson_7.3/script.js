function boxInput() {
    let inputUser;
    for (let i = 0; i <= 10; i++) {
        inputUser = prompt(`Please enter a number greater than 100`);
        if (Number(inputUser) > 100 || isNaN(inputUser) ) {
            alert(`Result, last information: ${inputUser}`);
            break;
        } else {
            alert('Please enter a number greater than 100');
        }
    }

}
boxInput();