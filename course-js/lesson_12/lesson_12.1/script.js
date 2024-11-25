const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let saveLink;

button1.addEventListener('click', () => {
    saveLink = prompt('Please, enter link');
});
button2.addEventListener('click', () => {
    window.open(saveLink, "_blank");
})
