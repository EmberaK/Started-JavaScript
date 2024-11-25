const userNumber = prompt(`Please write three-digit number`);
if (userNumber < 100 || userNumber > 999) {
    alert("Invalid input.")
    userNumber = prompt(`Please write three-digit number`)
};
const stringUserNumber = userNumber.toString()
const allStringUserNumber = stringUserNumber[0] === stringUserNumber[1] &&
                            stringUserNumber[1] === stringUserNumber[2] ? "Yes":"No";
const twoStringUserNumber = stringUserNumber[0] === stringUserNumber[1] || 
                            stringUserNumber[1] === stringUserNumber[2] || 
                            stringUserNumber[2] === stringUserNumber[0] ? "Yes":"No";
alert(`You entered: ${userNumber}. Are all digits the same? ${allStringUserNumber}. Are there any identical digits among them? ${twoStringUserNumber}.`);


